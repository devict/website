// TODO: cost transparency breakdown!

import { Head } from "$fresh/runtime.ts";
import { title } from "../lib/title.ts";

export default function Support() {
  return (
    <>
      <Head>
        <title>{title("Support")}</title>
      </Head>
      <div class="container mx-auto px-8">
        <div class="text-center">
          <h1 class="text-4xl mb-8">Support your local dev community!</h1>
          <p class="text-xl">
            devICT is 100% volunteer run and funded by the support of our
            community members and sponsor organizations.
          </p>
        </div>
        <hr class="my-8" />
        <div class="flex flex-row gap-4">
          <div class="flex-1">
            <h2 class="text-2xl my-4">Recurring Donations</h2>
            <p>
              You can create a recurring donation by creating an account on
              Patreon. To donate visit{" "}
              <a
                href="https://www.patreon.com/devict"
                title="devICT on Patreon"
                class="text-orange-500 hover:text-orange-600"
              >
                our Patreon profile
              </a>
              .
            </p>
          </div>

          <div class="flex-1">
            <h2 class="text-2xl my-4">One-time Donations</h2>
            <p>
              If you want to help but do not want to set up a recurring donation
              you can give a single amount using PayPal.
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="TV7Y785BF7V4G"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
