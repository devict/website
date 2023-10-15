import { assert } from "$std/_util/asserts.ts";
import { JSX } from "preact";

export default function Home() {
  const ghToken = Deno.env.get("GITHUB_TOKEN");
  assert(ghToken);

  const howToContribute = [
    {
      title: "Contribute with Code",
      content: (
        <>
          Browse our GitHub repositories and find a project that interests you.
          Look for issues tagged with{" "}
          <span class="font-mono bg-gray-100 px-1 rounded">
            devict-help-wanted
          </span>{" "}
          and jump right in!
        </>
      ),
    },
    {
      title: "Contribute without Code",
      content:
        `Help us with documentation, design, or outreach efforts.Conduct code reviews or help with testing.`,
    },
    {
      title: `Give a Talk or Workshop`,
      content:
        `Share your expertise in a lightning talk or a more comprehensive session. Conduct workshops to help others improve their skills.`,
    },
    {
      title: `Unique Contributions`,
      content:
        `Have a unique idea or skillset? We're all ears! Reach out to propose new ways to contribute.`,
    },
    {
      title: `Financial Support`,
      content:
        `Donations help us keep the lights on and fund community events. Every bit counts!`,
    },
  ];
  const whyContribute = [
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
      title: `Giving Back to the Community`,
      content:
        `By contributing, you help grow the local tech scene and create a richer environment for all developers.`,
    },
  ];

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

      <h2 class="text-3xl font-semibold my-8">How You Can Contribute</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {howToContribute.map((card) => <Card {...card} />)}
      </div>

      <h2 class="text-3xl font-semibold my-8">Why Contribute?</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {whyContribute.map((card) => <Card {...card} />)}
      </div>
    </div>
  );
}

type CardProps = {
  title: string;
  content: string | JSX.Element;
};

function Card({ title, content }: CardProps) {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-medium mb-2">{title}</h3>
      <p class="text-md mb-2">{content}</p>
    </div>
  );
}
