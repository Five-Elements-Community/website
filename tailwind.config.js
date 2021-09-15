module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
        ...theme('colors'),
        'air': '',
        'fire': '',
        'earth': '#806043',
        'metal': '',
        'water': '#024B86'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}