const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      fontSize: {
        xs: '12px',
        '2xs': '10px'
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0.2'
          },
          '20%': {
            opacity: '1'
          },
          '100%': {
            opacity: ' 0.2'
          }
        }
      },
      animation: {
        blink: 'blink 1.4s infinite both'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': value => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ]
}
