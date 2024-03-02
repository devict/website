import { FunctionComponent } from "preact";
import Card from "../components/Card.tsx";

export default function About() {
  return (
    <div class="container mx-auto px-8">
      <div class="text-center">
        <h2 class="text-4xl mb-4 max-w-4xl mx-auto">
          Wichita's software developer community
        </h2>
        <p class="text-2xl mb-4 max-w-4xl mx-auto">
          <strong>devICT</strong> is a volunteer-run community aiming to{" "}
          <strong>educate, empower and connect</strong> software developers and
          technologists in the <strong>Wichita, KS</strong> area.
        </p>
        <hr class="my-8 mx-auto max-w-md" />
        <p class="text-2xl max-w-4xl mx-auto mb-16">
          Whether you are new to the field, or an experienced engineer, devICT
          offers multiple avenues for you to engage, contribute, and grow your
          skillset as a technologist.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 justify-center">
        {[
          {
            title: `Who we are`,
            title_size: `2xl`,
            content: [
              `We are a group of individuals who have a common interest in
               software development.`,

              `Our skill levels vary greatly, from complete beginners to
               seasoned veterans. We welcome anyone with a curiosity for
               programming.`,

              `We strictly enforce a Code of Conduct to provide all of our
               members a safe and inclusive environment.`,
            ],
          },
          {
            title: `What we do`,
            title_size: `2xl`,
            content: [
              `Members of devICT have one common goal: to be better at what
                  we do. Our events and services are aimed at achieving that.`,

              `To make that happen we have monthly events that are both
                  social and educational.`,

              `We also have an active Slack community which serves as a place
                  to connect and discuss with others in the community.`,
            ],
          },
          {
            title: `Get involved!`,
            title_size: `2xl`,
            content: [
              `Most of the time we are hanging out in Slack. To join, just
               fill out this form.`,

              `Primarily, be sure to become a member on the Meetup page. Then
               you will receive notifications for upcoming events.`,

              `You could also give a talk! Share the knowledge! We enjoy
               learning about any development related topics. Contact a board
               member if you are interested!`,
            ],
          },
        ].map((card) => (
          <Card {...card} />
        ))}
      </div>

      <hr class="my-8 mt-16" />

      <div class="my-8">
        <div class="text-center justift-center">
          <h1 class="text-3xl my-4">Organizers</h1>
          <p class="text-lg md:max-w-4xl mx-auto">
            The devICT Institute is a 501c3 non-profit governed by a board of
            directors. In addition to the board we are supported by volunteers
            who organize events and generally keep things running.
          </p>
        </div>

        <h2 class="text-2xl mt-8">Board of Directors</h2>
        <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center mt-4">
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
          <VolunteerCard
            name="Josh Dutcher"
            slackId="U02U2QUAL"
            imageUrl="/img/leadership/josh-dutcher.jpg"
          />
        </div>
        <h2 class="text-2xl mt-8">Event Hosts and Volunteers</h2>
        <p></p>

        <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center mt-4">
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
          {role ? (
            <>
              <br />
              {role}
            </>
          ) : (
            <></>
          )}
          <br />
          <a
            href={`https://slack.com/app_redirect?channel=${slackId}`}
            target="blank"
            class="font-medium text-orange-500 dark:text-orange-600 hover:underline"
          >
            Contact on Slack
          </a>
        </figcaption>
      </figure>
    </div>
  );
};
