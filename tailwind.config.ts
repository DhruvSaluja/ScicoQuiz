import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'coral': {
          500: '#FF6B6B',},
      },
      backgroundImage: {
        'grid-pattern': "url('/images/bg-grid.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
