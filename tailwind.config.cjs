/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'button-pink': '#DBDDFF',
        'button-pink-hovered': '#A9ABD1'
      }
    },
  },
  plugins: [],
}
