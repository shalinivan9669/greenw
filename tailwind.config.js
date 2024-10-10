/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-green': '#a8cc55',
      },
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}

