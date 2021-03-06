const theme = require('tailwindcss/defaultTheme');

/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './providers/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat'].concat(theme.fontFamily.sans),
    },
    extend: {
      colors: {
        purple: {
          '5916a6': '#5916a6',
          '39007a': '#39007a',
        },
      },
      display: ['group-hover'],
      fontSize: {
        xxs: '0.625rem',
      },
      minWidth: {
        xs: '280px',
      },
      minHeight: {
        xs: '280px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['first', 'last', 'odd'],
      color: ['first', 'last', 'odd'],
      border: ['first', 'last', 'odd'],
      borderColor: ['first', 'last', 'odd'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-children'),
  ],
};
