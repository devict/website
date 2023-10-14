import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

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
      <body>
        <div class="px-4 py-8 mx-auto">
          <div class="max-w-screen-md mx-auto flex flex-col">
            <Header active={route} />
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}
