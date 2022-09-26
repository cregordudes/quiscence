/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink: "#E68BFF",
        myYellow: "#FFD438",
        myGreen: "#6BD9A9",
        myPurple: "##6366f1",
      },
    },
  },
  plugins: [],
};
