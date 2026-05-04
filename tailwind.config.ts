import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "Garamond", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        canvas: "#faf9f5",
        "canvas-soft": "#f5f0e8",
        "canvas-card": "#efe9de",
        "canvas-strong": "#e8e0d2",
        ink: "#141413",
        "body-strong": "#252523",
        body: "#3d3d3a",
        muted: "#6c6a64",
        "muted-soft": "#8e8b82",
        hairline: "#e6dfd8",
        "hairline-soft": "#ebe6df",
        surface: {
          dark: "#181715",
          "dark-elevated": "#252320",
          "dark-soft": "#1f1e1b",
        },
        coral: {
          DEFAULT: "#cc785c",
          active: "#a9583e",
          disabled: "#e6dfd8",
        },
        "on-dark": "#faf9f5",
        "on-dark-soft": "#a09d96",
        "on-coral": "#ffffff",
        accent: {
          teal: "#5db8a6",
          amber: "#e8a55a",
        },
        success: "#5db872",
        warning: "#d4a017",
        error: "#c64545",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "96px",
      },
    },
  },
  plugins: [],
} satisfies Config
