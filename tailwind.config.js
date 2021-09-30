const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'air': '#008080',
      'earth': '#806043',
      'fire': '#F73718',        
      'metal': '#41474E',
      'water': '#024B86',
      'twitter': '#55acee',
      'reddit': '#FF5700',
      'discord': '#7289da',
      'telegram': '#0088CC',
      'github': '#333'      
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}