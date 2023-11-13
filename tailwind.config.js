/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        dahliaM: ["dahlia-medium", "sans-serif"],
        dahliaB: ["dahlia-bold", "sans-serif"],
        "dmSans-regular": ["DMSans-regular", "sans-serif"],
        "dmSans-medium": ["DMSans-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
