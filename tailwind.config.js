/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#eb4f2d",
        blue: "#007cfa",
        dark: "#0e0f10",
        "gray-dark": "#181a1d",
        "gray-md": "#4f4f4f",
        "gray-light": "#828282",
        "tmdb-blue": "#01b4e4",
        "tmdb-teal": "#90cea1",
      },
    },
  },
  plugins: [],
};
