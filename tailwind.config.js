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
        cards: {
          100: "#91F1C3",
          200: "#50227D",
          300: "#FFCB49",
        },
        highlight: {
          50: "#CFCFCF",
          70: "#F6F6F6",
          100: "#666666",
          150: "#525252",
          200: "#222222",
          300: "#3F3F3F",
        },
        separator: "#FFCB47",
      },
      backgroundImage: {
        "noise-texture": "url('/noise.png')",
      },
      fontSize: {
        "7.5xl": "5rem",
        "4.5xl": "2.5rem",
        "3.5xl": "2rem",
        "5.5xl": "3.375rem"
      },
      lineHeight: {
        '6.5': "1.625rem",
        '11': "3.5rem",
        '18': "4.5rem"
      },
      padding: {
        '245px': '15.313rem',
        '184': '11.5rem'
      },
      maxWidth: {
        'main-width': '1120px'
      }
    },
  },
  plugins: [],
}
