/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': '#9B0000',
      'gray-1': '#171D26',
      'gray-2': '#393E46',
      'gray-3': '#0A0D104D',
      'gray-4': '#0000004D',
      'gray-5': '#434343',
      'white-1': '#FFFFFF',
      'white-2': '#F2F2F2',
      'white-3': '#FCFCFC',
      'creem': '#FFD9BF'
    },
  },
  plugins: [],
}
