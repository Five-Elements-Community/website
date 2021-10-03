const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1280px',
          }
        }
      })
    }
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      }
    },
    fontFamily: {
      'sans': ['monospace', 'sans-serif']
    },
    colors: {
      'token': '#C1A53A',
      'air': '#008080',
      'earth': '#806043',
      'fire': '#F73718',        
      'metal': '#41474E',
      'water': '#024B86',
      'twitter': '#55acee',
      'reddit': '#FF5700',
      'discord': '#7289da',
      'telegram': '#0088CC',
      'github': '#333',
      'card-background': '#333',
      'nice-gray': '#262626',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  }
}