module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
        ...theme('colors'),
        'air': '#008080',
        'earth': '#806043',
        'fire': '#F73718',        
        'metal': '#41474E',
        'water': '#024B86'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}