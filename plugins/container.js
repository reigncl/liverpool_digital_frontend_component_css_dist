/**
 * Defined as a plugin component to be used along with breakpoint modifiers
 */

const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
  const container = {
    '.container': {
      margin: '0 auto',
      '@apply px-5': {},
      'max-width': '1440px',

      '@media (min-width: 640px)': {
        '@apply px-5': {},
      },

      '@media (min-width: 768px)': {
        '@apply px-8': {},
      },

      '@media (min-width: 1440px)': {
        '@apply px-12': {},
      },
    },
  }
  addComponents(container)
})
