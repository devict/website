import { useState } from "preact/hooks";
import { Topic } from "../lib/topics.ts";

interface TopicItemProps {
  topic: Topic;
  hasVoted: boolean;
}

export default function TopicItem(
  { topic, hasVoted: initialHasVoted }: TopicItemProps,
) {
  const [hasVoted, setHasVoted] = useState(initialHasVoted);
  const [votes, setVotes] = useState(topic.votes);

  const handleVote = async () => {
    if (hasVoted) return;

    const response = await fetch("/api/upvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topic.name }),
    });

    if (response.ok) {
      setVotes(votes + 1);
      setHasVoted(true);
    } else {
      const error = await response.json();
      console.error("Error voting:", error);
      // Optionally, you can show an error message to the user here
    }
  };

  return (
    <div class="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
      <span class="text-lg">{topic.name}</span>
      <div class="flex items-center">
        <span class="mr-4 text-gray-600">{votes} votes</span>
        <button
          onClick={handleVote}
          disabled={hasVoted}
          class={`font-bold py-2 px-4 rounded ${
            hasVoted
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
