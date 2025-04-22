export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md}",
  ],
  safelist: [
    "text-theme-green",
    "text-theme-yellow",
    "text-gray-400",
    "animate-blink",
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
          '0%':   { opacity: '0' },
          '5%':   { opacity: '0.3' },
          '10%':  { opacity: '0.1' },
          '15%':  { opacity: '0.6' },
          '20%':  { opacity: '0.2' },
          '25%':  { opacity: '0.8' },
          '30%':  { opacity: '0.1' },
          '35%':  { opacity: '1' },
          '40%':  { opacity: '0.3' },
          '45%':  { opacity: '1' },
          '50%':  { opacity: '0.2' },
          '60%':  { opacity: '1' },
          '70%':  { opacity: '0.9' },
          '80%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { opacity: '1' },
        }
      },
      
      animation: {
        blink: 'blink 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
