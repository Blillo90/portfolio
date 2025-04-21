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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0.9' },
          '10%': { opacity: '0.2' },
          '20%': { opacity: '0.7' },
          '30%': { opacity: '0.3' },
          '40%': { opacity: '0.8' },
          '50%': { opacity: '1' },
          '60%': { opacity: '0.5' },
          '70%, 100%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
