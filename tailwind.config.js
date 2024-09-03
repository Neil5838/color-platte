/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: 'clamp(1.75rem, 3vw + 1rem, 2.5rem)',
        body: 'clamp(1rem, 2vw + 0.5rem, 1.5rem)',
      },
    },
  },
  plugins: [],
}

