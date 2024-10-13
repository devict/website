import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// Requires Fresh AOT builds to pre-compile tailwind classes to CSS
// https://fresh.deno.dev/docs/examples/migrating-to-tailwind#requirements-before-migrating
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "link": "#718096", // Slate-500 (lighter than before)
        "link-hover": "#2D3748", // Slate-800 (unchanged)
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "a": {
          color: theme("textColor.link"),
          textDecoration: "none",
          fontWeight: "500",
          transition: "color 0.2s ease-in-out",
        },
        "a:hover": {
          color: theme("textColor.link-hover"),
        },
      });
    }),
  ],
} satisfies Config;
