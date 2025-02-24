/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#0EA5E9",
          }
        },
        dark: {
          colors: {
            primary: "#0EA5E9",
          }
        },
      },
    }),
  ],
}
