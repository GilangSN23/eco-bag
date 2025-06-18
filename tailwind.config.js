/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // aktifkan dark mode pakai class 'dark'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // support app router Next.js 13+
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // tambahkan font-poppins
      },
    },
  },
  plugins: [],
}
