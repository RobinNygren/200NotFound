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
          accent: "#EEE2DC",
          background: "#EDC7B7",
          detail: "#BAB2B5",
        },
      },
    },
  },
  plugins: [],
};
