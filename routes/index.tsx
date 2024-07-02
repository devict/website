import { assert } from "$std/_util/asserts.ts";
import Card from "../components/Card.tsx";
import { fetchGitHubContributors, IContributor } from "../lib/github.ts";

import Button from "../components/Button.tsx";
import AboutHero from "../components/AboutHero.tsx";

const DEVICT_REPOS: string[] = [
  "devict/job-board",
  "devict/devict.org",
  "devict/keeper",
  "devict/hacktoberfest",
  "devict/help",
];

export default async function Home() {
  const ghToken = Deno.env.get("APP_GITHUB_TOKEN");
  assert(ghToken);

  const contributors = await fetchGitHubContributors(ghToken, DEVICT_REPOS);
  return (
    <div class="container mx-auto px-8">
      <AboutHero />
      <div class="my-8 flex flex-col gap-4 md:flex-row">
        <div class="flex-1 text-center md:my-0">
          <p class="min-w-full">
            <Button
              href="/about"
              title="About devICT"
              extraClasses="text-xl px-6 py-4 min-w-full inline-block"
            >
              Learn more
            </Button>
          </p>
        </div>
        <div class="flex-1 text-center md:my-0">
          <p class="min-w-full">
            <Button
              href="https://slack.devict.org"
              title="devICT Events"
              extraClasses="text-xl px-6 py-4 min-w-full inline-block"
            >
              Join us in Slack
            </Button>
          </p>
        </div>
        <div class="flex-1 text-center md:my-0">
          <p class="min-w-full">
            <Button
              href="https://meetup.com/devict"
              title="devICT Events"
              extraClasses="text-xl px-6 py-4 min-w-full inline-block"
            >
              Upcoming events
            </Button>
          </p>
        </div>
      </div>

      <hr class="my-12" />

      <Contribute contributors={contributors} />

      <div class="py-4">
        <h2 class="my-8 text-center text-2xl font-bold">
          In addition to our community members, we are supported by these great
          organizations.
        </h2>
      </div>
      <div class="flex flex-col gap-4 px-8 md:flex-row md:gap-8 md:px-[100px]">
        <div class="flex-1 pt-2">
          <img
            src="/img/logos/grooverlabs-bw.png"
            class="opacity-50 hover:opacity-75"
          />
        </div>
        <div class="flex-1">
          <img
            src="/img/logos/moonbaselabs.svg"
            class="opacity-50 hover:opacity-75"
          />
        </div>
        <div class="flex-1 pt-4">
          <img
            src="/img/logos/quilibrium.svg"
            class="opacity-50 hover:opacity-75"
          />
        </div>
      </div>
    </div>
  );
}

type ContributeProps = {
  contributors: IContributor[];
};

function Contribute({ contributors }: ContributeProps) {
  return (
    <>
      <div class="text-center">
        <p class="mx-auto mb-4 max-w-4xl text-4xl">
          Join the fun, reap the rewards
        </p>
        <p class="mx-auto mb-4 max-w-4xl text-2xl">
          There's a lot to gain from contributing, and many ways to do it.
        </p>
        <hr class="mx-auto my-8 max-w-md" />
      </div>

      <h2 class="my-8 text-3xl font-semibold">Why contribute?</h2>
      <div class="mb-4 grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: `Build Skills`,
            content:
              `Working on real-world projects exposes you to new technologies and best practices.`,
          },
          {
            title: `Build Portfolio`,
            content:
              `Your contributions get recorded on GitHub, providing tangible proof of your skills.`,
          },
          {
            title: `Build Network`,
            content:
              `Interacting with the community offers immense learning opportunities and widens your professional network.`,
          },
          {
            title: `Build Community`,
            content:
              `By contributing, you help grow the local tech scene and create a richer environment for everyone involved.`,
          },
        ].map((card) => <Card {...card} title_size="xl" />)}
      </div>

      <h2 class="my-8 text-3xl font-semibold">How to contribute?</h2>
      <div class="mb-4 grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: `Join the Conversation`,
            content: (
              <>
                Join us{" "}
                <a
                  href="https://slack.devict.org"
                  title="Join devICT Slack"
                  class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
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
                  class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
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
            content:
              `Share your knowledge and experience in a lightning talk or more comprehensive sessions.`,
            link: "https://speak.devict.org/",
            link_text: "Sign Up",
            external: true,
          },
          {
            title: `Support Financially`,
            content:
              `Donations help us keep the lights on and fund community events. Every bit counts!`,
            link: "/support",
            link_text: "Donate",
          },
        ].map((card) => <Card {...card} title_size="xl" />)}
      </div>
      <h2 class="my-8 text-3xl font-semibold">Contributors</h2>

      <div class="grid grid-cols-2 gap-4 rounded-lg bg-white shadow-lg md:grid-cols-4 lg:grid-cols-6">
        {contributors.map((contributor) => (
          <div class="mx-4 my-4 inline-block">
            <Contributor {...contributor} />
          </div>
        ))}
      </div>
    </>
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
        class="mx-4 cursor-pointer text-center"
        style="display: flex; flex-direction: column; align-items: center;"
      >
        <img src={avatar_url} alt={login} class="mb-2 h-16 w-16 rounded-full" />
        <p class="text-sm">{login}</p>
      </div>
    </a>
  );
}
