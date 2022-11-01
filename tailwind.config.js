/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "mont-regular",
        bolded: "mont-bold",
      },
      colors: {
        primary: "rgb(28, 28, 28)",
        secondary: "#5135FF",
      },
      backgroundImage: {
        "noise-texture": "url('/noise.png')",
      },
    },
  },
  plugins: [],
};
