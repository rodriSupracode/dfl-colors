/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",  // Puedes personalizar los colores según el diseño de DFL Colors
        secondary: "#F1FAEE",
        dark: "#1D3557",
        light: "#A8DADC",
      }
    },
  },
  plugins: [],
}
