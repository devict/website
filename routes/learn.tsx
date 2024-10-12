import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { title } from "../lib/title.ts";
import { Topic, Topics } from "../lib/topics.ts";
import { Users } from "../lib/users.ts";
import TopicItem from "../islands/TopicItem.tsx";

// Add this interface to define the shape of the data prop
interface LearnProps {
  topics: Topic[];
  votedTopics: string[];
  error?: ErrorCode;
}

// Update the Learn component to accept props
export default function Learn({ data }: PageProps<LearnProps>) {
  const { topics, votedTopics, error } = data;

  return (
    <>
      <Head>
        <title>{title("Learn")}</title>
      </Head>
      <div class="container mx-auto px-4">
        <h1 class="sm:text-4xl text-2xl font-bold mb-8 text-center">
          What do you want to learn?
        </h1>
        <div class="max-w-2xl mx-auto">
          <NewTopicForm error={error} />
          <div class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            {topics.map((topic) => (
              <TopicItem
                key={topic.name}
                topic={topic}
                hasVoted={votedTopics.includes(topic.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Update NewTopicForm to accept error prop
function NewTopicForm({ error }: { error?: ErrorCode }) {
  const err = error ? errors[error] : null;
  return (
    <div class="bg-white rounded-lg shadow-lg p-6">
      {err && <div class="text-red-500 mb-4">{err}</div>}
      <form method="POST" class="flex items-center">
        <input
          name="topic"
          type="text"
          placeholder="New topic"
          class="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export const handler: Handlers<LearnProps> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const error = url.searchParams.get("error") as ErrorCode | null;
    const topics = await Topics.list();
    const userId = await Users.getOrCreateUserId(req);

    const votedTopics = await Promise.all(
      topics.map(async (topic) => {
        const hasVoted = await Users.hasVoted(userId, topic.name);
        return hasVoted ? topic.name : null;
      }),
    );

    const response = await ctx.render({
      topics,
      votedTopics: votedTopics.filter((t): t is string => t !== null),
      error: error || undefined,
    });

    // Set the userId cookie if it's a new user
    if (!req.headers.get("cookie")?.includes("userId=")) {
      response.headers.set(
        "Set-Cookie",
        `userId=${userId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`,
      );
    }

    return response;
  },
};

type ErrorCode = "invalid-topic" | "server-error" | "already-voted";
const errors: Record<ErrorCode, string> = {
  "invalid-topic": "Invalid topic. Please enter a non-empty topic.",
  "server-error": "An error occurred while adding the topic. Please try again.",
  "already-voted": "You have already voted for this topic.",
};
