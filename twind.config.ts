import { defineConfig, Preset } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
    theme: {
      extend: {
        colors: {
          'ict-orange': '#eb7f32'
        },
        fontSize: {
          'xxs': '0.65rem'
        }
      },
    },
  }),
  selfURL: import.meta.url,
};
