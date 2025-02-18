/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#666666",
      },
      backgroundColor: {
        dark: '#000000',
      },
      textColor: {
        dark: '#ffffff',
      },
      borderColor: {
        dark: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}; 