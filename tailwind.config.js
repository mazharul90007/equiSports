import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8f4e9', // Set primary color
        secondary: '#6B705C', // Set secondary color
        buttonText: '#FFD700', // Set button text color
      },
    },
  },
  plugins: [daisyui],
}

