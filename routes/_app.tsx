import { AppProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";

const nav = [
  { name: "About", href: "https://devict.org/about" },
  { name: "Conduct", href: "https://devict.org/conduct" },
  { name: "Events", href: "https://meetup.com/devict" },
  { name: "Chat", href: "https://slack.devict.org" },
  { name: "Jobs", href: "https://jobs.devict.org" },
  { name: "Support", href: "https://devict.org/support" },
  { name: "Contribute", href: "/contribute" },
];

export default function App({ Component, route }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#eb7e32" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Contribute &middot; devICT</title>
      </head>
      <body class="bg-[url('/cream_pixels.png')] bg-repeat">
        <div class="px-4 py-8 mx-auto">
          <div class="max-w-screen-md mx-auto flex flex-col">
            <Header active={route} nav={nav} />
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}
