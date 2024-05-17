/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Slab", "serif"],
    },
    extend: {
      colors: {
        "color-scheme": {
          primary: "#123C69",
          secondary: "#123C69",
          mediumgrey: "#53575d",
          accent: "#EEE2DC",
          background: "#F8F8FF",
          detail: "#BAB2B5",
          darker: "#f5c1ac",
          lightgrey: "#e2e7ec",
        },
      },
    },
  },
  plugins: [],
};
