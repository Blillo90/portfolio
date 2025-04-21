export default {
    content: [
      "./src/**/*.{astro,html,js,ts,jsx,tsx,md}",
    ],
    safelist: [
      "text-theme-green",
      "text-theme-yellow",
      "text-gray-400",
    ],
    theme: {
      extend: {
        colors: {
          'theme-yellow': 'var(--color-theme-yellow)',
          'theme-green': 'var(--color-theme-green)',
          'primary-light': 'var(--color-primary-light)',
          'primary-medium': 'var(--color-primary-medium)',
          'primary-dark': 'var(--color-primary-dark)',
          'primary-lighter': 'var(--color-primary-lighter)',
        },
      },
    },
    plugins: [],
  }