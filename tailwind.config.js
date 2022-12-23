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
        marcellus: ['Marcellus', 'serif']

      },
    },
  },
  plugins: [],
}
