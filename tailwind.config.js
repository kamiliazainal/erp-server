/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{blade.php,vue,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('./resources/assets/images/background.jpg')"
      },
    },
  },
  plugins: [],
}
