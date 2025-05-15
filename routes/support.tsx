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
              you can give a single amount using{" "}
              <a
                href="https://www.paypal.com/ncp/payment/F4GL83F4M34QL"
                title="Donate to devICT"
              >
                PayPal or Venmo
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
