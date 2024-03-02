// import Card from "../components/Card.tsx";

import Button from "../components/Button.tsx";

export default function Home() {
  return (
    <div class="container mx-auto px-8">
      <div class="text-center">
        <h1 class="text-4xl mb-4 max-w-4xl mx-auto">
          Wichita's software developer community
        </h1>
        <h2 class="text-xl mb-4 max-w-4xl mx-auto">
          <strong>devICT</strong> is a volunteer-run community aiming to{" "}
          <strong>educate, empower and connect</strong> software developers and
          technologists in the <strong>Wichita, KS</strong> area.
        </h2>
        <hr class="my-8 mx-auto max-w-md" />
        <p class="text-2xl max-w-4xl mx-auto mb-16">
          Whether you are new to the field, or an experienced engineer, devICT
          offers multiple avenues for you to engage, contribute, and grow your
          skillset as a technologist.
        </p>
      </div>
      <div class="flex flex-col md:flex-row my-8 gap-4">
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
      <div class="py-4">
        <h2 class="text-2xl text-center my-8 font-bold">
          We are supported by these great orgs
        </h2>
      </div>
      <div class="flex flex-row gap-8">
        <div class="flex-1 pt-2">
          <img src="/img/logos/grooverlabs-bw.png" />
        </div>
        <div class="flex-1">
          <img src="/img/logos/moonbaselabs.svg" />
        </div>
        <div class="flex-1 pt-4">
          <img src="/img/logos/quilibrium.svg" />
        </div>
      </div>
    </div>
  );
}
