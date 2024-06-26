/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono", "san-serif"],
    },
    colors: {
      dark: "#171b23",
      "t-dark": "#ffffff",
      grey: "#AEAFB2",
      white: "#BFC1B9",
      "first-col": "#5F86A5",
      "second-col": "#4B727A",
      "third-col": "#6D8E7E",
      "fourth-col": "#415A42",
      "fifth-col": "#1B2E3E",
      "sixth-col": "#8CBCE1",
      "accent-dark": "#293741",
    },
  },
  plugins: [],
};
