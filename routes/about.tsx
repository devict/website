import Card from "../components/Card.tsx";

export default function About() {
  return (
    <div class="container mx-auto px-8">
      <div class="text-center">
        <p class="text-4xl mb-4 max-w-4xl mx-auto">
          Wichita's software developer community
        </p>
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
    </div>
  );
}
