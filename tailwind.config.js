/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,js,njk}",
    "./_layouts/**/*.{html,js,njk}",
    "./*.{html,js,njk}",
    "./**/*.{html,js,njk}",
    "!./_site/**",
    "!./node_modules/**"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
