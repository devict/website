import { type Config } from "tailwindcss";

// Requires Fresh AOT builds to pre-compile tailwind classes to CSS
// https://fresh.deno.dev/docs/examples/migrating-to-tailwind#requirements-before-migrating
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
