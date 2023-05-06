/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Revamped: ["REVAMPED"],
        IbmMono: ["IBM Plex Mono"],
      },
      colors: {
        lightWhite: "#968e8e",
      },
    },
  },
  plugins: [],
};
