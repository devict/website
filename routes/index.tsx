import { assert } from '$std/_util/asserts.ts'
import { JSX } from 'preact'
import { fetchGitHubContributors, fetchGitHubMembers } from '../lib/github.ts'

const DEVICT_REPOS: string[] = [
  'devict/job-board',
  'devict/devict.org',
  'devict/keeper',
  'devict/hacktoberfest',
  'devict/help',
]

export default async function Home() {
  const ghToken = Deno.env.get('GITHUB_TOKEN')
  assert(ghToken)

  const contributors = await fetchGitHubContributors(ghToken, DEVICT_REPOS)

  return (
    <div class="container mx-auto px-8">
      <div class="text-center">
        <p class="text-2xl mb-4 max-w-4xl mx-auto">
          <strong>devICT</strong> is a volunteer-run community aiming to{' '}
          <strong>educate, empower and connect</strong> software developers and
          technologists in the <strong>Wichita, KS</strong> area.
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
            content: `Working on real-world projects exposes you to new technologies and best practices.`,
          },
          {
            title: `Portfolio Building`,
            content: `Your contributions get recorded on GitHub, providing tangible proof of your skills.`,
          },
          {
            title: `Learning and Networking`,
            content: `Interacting with the community offers immense learning opportunities and widens your professional network.`,
          },
          {
            title: `Giving Back`,
            content: `By contributing, you help grow the local tech scene and create a richer environment for everyone involved.`,
          },
        ].map((card) => (
          <Card {...card} />
        ))}
      </div>

      <h2 class="text-3xl font-semibold my-8">How You Can Contribute</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 justify-center">
        {[
          {
            title: `Join the Conversation`,
            content: (
              <>

                Join us{" "}
                <a href="https://slack.devict.org" title="Join devICT Slack" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">

                  in Slack
                </a>{' '}
                and jump into the conversation! Share what you're working on,
                asking questions, and help others.
              </>
            ),
            link: 'https://slack.devict.org/',
            link_text: 'Sign Up'
          },
          {
            title: 'Contribute with Code',
            content: (
              <>

                Browse our{" "}
                <a href="/projects" title="devICT Projects" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">active projects</a>,
                find an issue that interests you, and jump right in!

              </>
            ),
            link: '/projects',
            link_text: 'Get Coding'
          },
          {
            title: 'Contribute without Code',
            content: (
              <>
                Help us with documentation, design, or outreach efforts. Add

                clarity by asking questions on{" "}
                <a href="/projects" title="devICT Projects" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">existing issues</a>,
                or contribute your ideas by filing new ones.

              </>
            ),
            link: "/projects",
            link_text: "Contribute"
          },
          {
            title: `Give a Talk or Workshop`,
            content: `Share your knowledge and experience in a lightning talk or more comprehensive sessions.`,
          },
          {
            title: `Financial Support`,
            content: `Donations help us keep the lights on and fund community events. Every bit counts!`,
          },
          {
            title: `Unique Contributions`,
            content: `Have a unique idea or skillset? We're all ears! Reach out to propose new ways to contribute.`,
          },
        ].map((card) => (
          <Card {...card} />
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
  )
}

type CardProps = {
  title: string;
  content: string | JSX.Element;
  link: string;
  link_text: string;
};


type ContributorsProps = {
  login: string
  avatar_url: string
  html_url: string
}
function Card({ title, content, link, link_text }: CardProps) {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-start">
      <div>
        <h3 class="text-xl font-medium mb-2">{title}</h3>
        <p class="text-md">{content}</p>
      </div>
      {link && (
        <a class='bg-ict-orange font-bold mt-4 px-4 py-2 text-white w-auto' href={link}>{link_text ? (link_text) : "Learn more"}</a>
      )}
    </div>
  )
}

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
  )
}
