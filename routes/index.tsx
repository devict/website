import { assert } from "$std/_util/asserts.ts";
import Card from '../components/Card.tsx';

export default function Home() {
  const ghToken = Deno.env.get("GITHUB_TOKEN");
  assert(ghToken);

  return (
    <div class="container mx-auto px-8">
      <div class="text-center">
        <p class="text-2xl mb-4 max-w-4xl mx-auto">
          <strong>devICT</strong> is a volunteer-run community aiming to{" "}
          <strong>educate, empower and connect</strong>{" "}
          software developers and technologists in the{" "}
          <strong>Wichita, KS</strong> area.
        </p>
        <hr class="my-8 mx-auto max-w-md" />
        <p class="text-lg mb-4">
          Whether you are new to coding or an experienced developer, devICT
          offers multiple avenues for you to engage, contribute, and grow.
        </p>
      </div>

      <h2 class="text-3xl font-semibold my-8">Why Contribute?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 justify-center">
        {[
          {
            title: `Build Skills`,
            content:
              `Working on real-world projects exposes you to new technologies and best practices.`,
          },
          {
            title: `Portfolio Building`,
            content:
              `Your contributions get recorded on GitHub, providing tangible proof of your skills.`,
          },
          {
            title: `Learning and Networking`,
            content:
              `Interacting with the community offers immense learning opportunities and widens your professional network.`,
          },
          {
            title: `Giving Back`,
            content:
              `By contributing, you help grow the local tech scene and create a richer environment for everyone involved.`,
          },
        ].map((card) => <Card {...card} />)}
      </div>

      <h2 class="text-3xl font-semibold my-8">How You Can Contribute</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 justify-center">
        {[
          {
            title: `Join the Conversation`,
            content: (
              <>
                Join us{" "}
                <a href="https://slack.devict.org" title="Join devICT Slack">
                  in Slack
                </a>{" "}
                and jump into the conversation! Share what you're working on,
                asking questions, and help others.
              </>
            ),
            link: 'https://slack.devict.org/',
            link_text: 'Sign Up'
          },
          {
            title: "Contribute with Code",
            content: (
              <>
                Browse our{" "}
                <a href="/projects" title="devICT Projects">active projects</a>,
                find an issue that interests you, and jump right in!
              </>
            ),
            link: '/projects',
            link_text: 'Get Coding'
          },
          {
            title: "Contribute without Code",
            content: (
              <>
                Help us with documentation, design, or outreach efforts. Add
                clarity by asking questions on{" "}
                <a href="/projects" title="devICT Projects">existing issues</a>,
                or contribute your ideas by filing new ones.
              </>
            ),
            link: "/projects",
            link_text: "Contribute"
          },
          {
            title: `Give a Talk or Workshop`,
            content:
              `Share your knowledge and experience in a lightning talk or more comprehensive sessions.`,
          },
          {
            title: `Financial Support`,
            content:
              `Donations help us keep the lights on and fund community events. Every bit counts!`,
          },
          {
            title: `Unique Contributions`,
            content:
              `Have a unique idea or skillset? We're all ears! Reach out to propose new ways to contribute.`,
          },
        ].map((card) => <Card {...card} />)}
      </div>
    </div>
  );
}
