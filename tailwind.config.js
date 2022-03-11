const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',

  purge: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      gap: {
        '15': '15px',
      },
      container: {
        padding: '0.94rem',
      },
      inset: {
        '11': '0px',
        '12': '6px',
        '13': '12px',
      },
      margin: {
        '30': '1.875rem',
        '50': '3.125rem'
      },
      borderWidth: {
        '1': '1px',
        '1.5': '1.5px',
      },
      borderColor: {
        'red': '#EF1B2F'
      }
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
