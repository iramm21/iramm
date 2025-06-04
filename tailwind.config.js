/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ⬅️ This is essential for class-based toggling
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // App Router structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
