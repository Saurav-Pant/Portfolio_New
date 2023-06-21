/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4081",
        secondary: "#4CAF50",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        fad0c4: "#fad0c4",
        ffd1ff: "#ffd1ff",
      }),
      backgroundImage: {
        pattern: `linear-gradient(rgba(241, 245, 255, .2) 2px, transparent 2px), linear-gradient(90deg, rgba(241, 245, 255, .2) 1px, transparent 1px);`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('Assets/Hero_Background5.jpg')",
      },
    },
  },
  plugins: [],
};
