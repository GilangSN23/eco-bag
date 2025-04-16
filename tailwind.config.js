/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <-- aktifkan dark mode
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // kalau pakai app router
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  