/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './layouts/**/*.htm',
    './content/**/*.{md,html}',
    './assets/**/*.{js,ts,css,scss}',
    './themes/clean-hugo/layouts/**/*.html',
    './themes/clean-hugo/assets/**/*.{js,ts,css,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        sora: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Note: These colors are defined for reference but not used as Tailwind classes.
        // They are implemented as CSS variables in assets/css/main.scss.
        // Kept here for documentation and potential future use.
        buff: '#EDB88B',        // Buff (warm peachy/tan) - maps to --color-secondary
        verdigris: '#71B3B5',    // Verdigris (teal/cyan) - maps to --color-primary
        darkPurple: '#42213D',   // Dark purple
        mountbatten: '#AC87A0',  // Mountbatten pink - maps to --color-accent-light
        slateDark: '#395E66',     // Dark slate gray
        darkTeal: '#0b5757',    // Dark teal
        verdigrisDark:'#2E6060', // Darker verdigris - maps to --color-primary-dark
        verdigrisBackground: '#D6E3E3', // Light verdigris background - maps to --color-primary-light
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
