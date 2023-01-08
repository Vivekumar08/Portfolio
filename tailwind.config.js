const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  darkMode: 'className',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Chivo: ['Chivo Mono', "monospace"],
        papyrus: ['Papyrus', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
        marcellus: ['Marcellus', 'serif'],
        Monoton :['Electrolize', 'sans-serif'],
        Lobster :['Lobster Two', 'cursive']

      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
