import { FunctionComponent } from "preact";
import Card from "../components/Card.tsx";
import AboutHero from "../components/AboutHero.tsx";
import { Head } from "$fresh/runtime.ts";
import { title } from "../lib/title.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>{title("About")}</title>
      </Head>
      <div class="container mx-auto px-8">
        <AboutHero />
        <div class="mb-4 grid grid-cols-1 justify-center gap-4 lg:grid-cols-3">
          <Card
            title={`Who we are`}
            title_size={`2xl`}
            content={[
              `We are a group of individuals who have a common interest in software development.`,
              `Our skill levels vary greatly, from complete beginners to seasoned veterans. We welcome anyone with a curiosity for programming.`,
              `We strictly enforce a Code of Conduct to provide all of our members a safe and inclusive environment.`,
            ]}
          />
          <Card
            title={`What we do`}
            title_size={`2xl`}
            content={[
              `Members of devICT have one common goal: to be better at what we do. Our events and services are aimed at achieving that.`,
              `To make that happen we have monthly events that are both social and educational.`,
              `We also have an active Slack community which serves as a place to connect and discuss with others in the community.`,
            ]}
          />
          <Card
            title={`Get involved!`}
            title_size={`2xl`}
            content={[
              `Most of the time we are hanging out in Slack. To join, just fill out this form.`,
              `Primarily, be sure to become a member on the Meetup page. Then you will receive notifications for upcoming events.`,
              `You could also give a talk! Share the knowledge! We enjoy learning about any development related topics. Contact a board member if you are interested!`,
            ]}
          />
        </div>

        <hr class="my-8 mt-16" />

        <div class="my-8">
          <div class="justift-center text-center">
            <h1 class="my-4 text-3xl">Organizers</h1>
            <p class="mx-auto text-lg md:max-w-4xl">
              The devICT Institute is a 501c3 non-profit governed by a board of
              directors. In addition to the board we are supported by volunteers
              who organize events and generally keep things running.
            </p>
          </div>

          <h2 class="mt-8 text-2xl">Board of Directors</h2>
          <div class="mt-4 grid grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-5">
            <VolunteerCard
              name="Seth Etter"
              slackId="U02T9190X"
              imageUrl="/img/leadership/seth-etter.jpg"
            />
            <VolunteerCard
              name="Christen Lofland"
              slackId="U02TG0SGZ"
              imageUrl="/img/leadership/christen-lofland.jpg"
            />
            <VolunteerCard
              name="Michael Neth"
              slackId="U02V81GGA"
              imageUrl="/img/leadership/michael-neth.jpg"
            />
            <VolunteerCard
              name="Kevin Elledge"
              slackId="U03EGDSPD"
              imageUrl="/img/leadership/kevin-elledge.jpg"
            />
          </div>
          <h2 class="mt-8 text-2xl">Event Hosts and Volunteers</h2>
          <p></p>

          <div class="mt-4 grid grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-5">
            <VolunteerCard
              name="Brian Buller"
              role="Code & Coffee Host"
              slackId="U030RD9NU"
              imageUrl="/img/leadership/brian-buller.jpg"
            />
            <VolunteerCard
              name="Brian Foster"
              role="Game Jam Organizer"
              slackId="U03TRPHR0"
              imageUrl="/img/leadership/brian-foster.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface VolunteerCardProps {
  name: string;
  role?: string;
  imageUrl: string;
  slackId: string;
}
const VolunteerCard: FunctionComponent<VolunteerCardProps> = ({
  name,
  role,
  imageUrl,
  slackId,
}) => {
  return (
    <div>
      <figure class="figure">
        <img src={imageUrl} class="rounded" alt={`Image of ${name}`} />
        <figcaption class="figure-caption">
          <strong>{name}</strong>
          {role
            ? (
              <>
                <br />
                {role}
              </>
            )
            : <></>}
          <br />
          <a
            href={`https://slack.com/app_redirect?channel=${slackId}`}
            target="blank"
            class="font-medium text-orange-500 hover:underline dark:text-orange-600"
          >
            Contact on Slack
          </a>
        </figcaption>
      </figure>
    </div>
  );
};
