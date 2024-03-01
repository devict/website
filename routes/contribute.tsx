import { assert } from "$std/_util/asserts.ts";
import Card from "../components/Card.tsx";
import { fetchGitHubContributors } from "../lib/github.ts";

const DEVICT_REPOS: string[] = [
  "devict/job-board",
  "devict/devict.org",
  "devict/keeper",
  "devict/hacktoberfest",
  "devict/help",
];

export default async function Home() {
  const ghToken = Deno.env.get("GITHUB_TOKEN");
  assert(ghToken);

  const contributors = await fetchGitHubContributors(ghToken, DEVICT_REPOS);

  return (
    <div class="container mx-auto px-8">
      <div class="text-center">
        <p class="text-4xl mb-4 max-w-4xl mx-auto">
          Join the fun, reap the rewards
        </p>
        <p class="text-2xl mb-4 max-w-4xl mx-auto">
          There's a lot to gain from contributing, and many ways to do it.
        </p>
        <hr class="my-8 mx-auto max-w-md" />
      </div>

      <h2 class="text-3xl font-semibold my-8">Why contribute?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 justify-center">
        {[
          {
            title: `Build Skills`,
            content: `Working on real-world projects exposes you to new technologies and best practices.`,
          },
          {
            title: `Build Portfolio`,
            content: `Your contributions get recorded on GitHub, providing tangible proof of your skills.`,
          },
          {
            title: `Build Network`,
            content: `Interacting with the community offers immense learning opportunities and widens your professional network.`,
          },
          {
            title: `Build Community`,
            content: `By contributing, you help grow the local tech scene and create a richer environment for everyone involved.`,
          },
        ].map((card) => (
          <Card {...card} title_size="xl" />
        ))}
      </div>

      <h2 class="text-3xl font-semibold my-8">How to contribute?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 justify-center">
        {[
          {
            title: `Join the Conversation`,
            content: (
              <>
                Join us{" "}
                <a
                  href="https://slack.devict.org"
                  title="Join devICT Slack"
                  class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  in Slack
                </a>{" "}
                and jump into the conversation! Share what you're working on,
                asking questions, and help others.
              </>
            ),
            link: "https://slack.devict.org/",
            link_text: "Join Slack",
          },
          {
            title: "Contribute to a Project",
            content: (
              <>
                Browse our{" "}
                <a
                  href="/projects"
                  title="devICT Projects"
                  class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  active projects
                </a>
                , find an issue that interests you, and jump right in! Plenty of
                ways to contribute with or without coding.
              </>
            ),
            link: "/projects",
            link_text: "Get Coding",
          },
          {
            title: `Give a Talk or Workshop`,
            content: `Share your knowledge and experience in a lightning talk or more comprehensive sessions.`,
            link: "https://speak.devict.org/",
            link_text: "Sign Up",
            external: true,
          },
          {
            title: `Support Financially`,
            content: `Donations help us keep the lights on and fund community events. Every bit counts!`,
            link: "/support",
            link_text: "Donate",
          },
        ].map((card) => (
          <Card {...card} title_size="xl" />
        ))}
      </div>
      <h2 class="text-3xl font-semibold my-8">Contributors</h2>

      <div class="bg-white rounded-lg shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {contributors.map((contributor) => (
          <div class="inline-block mx-4 my-4">
            <Contributor {...contributor} />
          </div>
        ))}
      </div>
    </div>
  );
}

type ContributorsProps = {
  login: string;
  avatar_url: string;
  html_url: string;
};

function Contributor({ login, avatar_url, html_url }: ContributorsProps) {
  return (
    <a href={html_url} target="_blank" rel="noopener noreferrer">
      <div
        class="text-center mx-4 cursor-pointer"
        style="display: flex; flex-direction: column; align-items: center;"
      >
        <img src={avatar_url} alt={login} class="rounded-full h-16 w-16 mb-2" />
        <p class="text-sm">{login}</p>
      </div>
    </a>
  );
}
