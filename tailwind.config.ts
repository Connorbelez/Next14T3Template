import type { Config } from "tailwindcss"

// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
// 	],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config

// export default config





// import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',


],
  theme: {
    extend: {
      colors : {
            muted:"#27272a",
            'muted-foreground': 'var(--muted-foreground)',
            card: 'var(--card)',
            'card-foreground': 'var(--card-foreground)',
            popover: 'var(--popover)',
            'popover-foreground': 'var(--popover-foreground)',
            // primary: 'var(--primary)',
            // 'primary-foreground': 'var(--primary-foreground)',
            // secondary: 'var(--secondary)',
            'secondary-foreground': 'var(--secondary-foreground)',
            accent: 'var(--accent)',
            'accent-foreground': 'var(--accent-foreground)',
            destructive: 'var(--destructive)',
            'destructive-foreground': 'var(--destructive-foreground)',
            // border: 'var(--border)',
            input: 'var(--input)',
            // ring: 'var(--ring)',
            border: "#27272a",
            ring: "#d4d4d8"
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
    
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/typography'),require("tailwindcss-animate"),nextui(
    {prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            muted: "#f4f4f5",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background:"#18181B",
            muted:"#27272a",
            'muted-foreground': 'var(--muted-foreground)',
            card: 'var(--card)',
            'card-foreground': 'var(--card-foreground)',
            popover: 'var(--popover)',
            'popover-foreground': 'var(--popover-foreground)',
            // primary: 'var(--primary)',
            // 'primary-foreground': 'var(--primary-foreground)',
            // secondary: 'var(--secondary)',
            // 'secondary-foreground': 'var(--secondary-foreground)',
            accent: 'var(--accent)',
            'accent-foreground': 'var(--accent-foreground)',
            destructive: 'var(--destructive)',
            'destructive-foreground': 'var(--destructive-foreground)',
            border: "#27272a",
            ring: "#d4d4d8"
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
