import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import { title } from "../lib/title.ts";

const nav = [
  { name: "About", href: "/about" },
  { name: "Events", href: "https://meetup.com/devict", target: "_blank" },
  { name: "Projects", href: "/projects" },
  { name: "Jobs", href: "https://jobs.devict.org", target: "_blank" },
  { name: "Support", href: "/support" },
  { name: "Conduct", href: "/conduct" },
];

export default function App({ Component, route }: PageProps) {
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
        <link rel="stylesheet" href="/styles.css" />
        <style>
          {`
          @font-face {
            font-family: "Source Code Pro";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/fonts/SourceCodePro-Regular.ttf") format("ttf");
          }
        `}
        </style>

        <title>{title()}</title>
      </head>
      <body class="bg-[url('/cream_pixels.png')] bg-repeat font-sans">
        <Header active={route} nav={nav} />
        <div class="pb-8 mx-auto">
          <div class="max-w-screen-xl mx-auto flex flex-col">
            <Component />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
