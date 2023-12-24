import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",


],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui(
    {prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        // light: {
        //   layout: {}, // light theme layout tokens
        //   colors: {}, // light theme colors
        // },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background:"#18181B"
          }, // dark theme colors
        },
        // ... custom themes
      },
    },
    {"purple-dark": {
      extend: "dark", // <- inherit default values from dark theme
      colors: {
        background: "#0D001A",
        foreground: "#ffffff",
        primary: {
          50: "#3B096C",
          100: "#520F83",
          200: "#7318A2",
          300: "#9823C2",
          400: "#c031e2",
          500: "#DD62ED",
          600: "#F182F6",
          700: "#FCADF9",
          800: "#FDD5F9",
          900: "#FEECFE",
          DEFAULT: "#DD62ED",
          foreground: "#ffffff",
        },
        focus: "#F182F6",
      },
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
    },
  },
)],
} satisfies Config;
