/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './layouts/**/*.htm',
    './content/**/*.{md,html}',
    './assets/**/*.{js,ts,css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        buff: '#EDB88B',        // Buff (warm peachy/tan)
        verdigris: '#71B3B5',    // Verdigris (teal/cyan)
        darkPurple: '#42213D',   // Dark purple
        mountbatten: '#AC87A0',  // Mountbatten pink
        slateDark: '#395E66'     // Dark slate gray
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
