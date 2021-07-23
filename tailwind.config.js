module.exports = {
  // New compiler
  mode: 'jit',
  // Lets tailwind know what pages to care about
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': "#4285f4",
      'secondary': "#EA4335",
      'third': "#FBBC05",
      'fourth': '#34A853',
      'light': "#ffff",
      'gray': 'text-gray-500',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/line-clamp')],
}
