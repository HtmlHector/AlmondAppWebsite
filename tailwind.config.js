/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'accent': 'var(--color-accent)',
        'light-green': 'var(--color-light-green)',
        'dark-green': 'var(--color-dark-green)',
        'gray': {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'error': 'var(--color-error)',
      },
      fontFamily: {
        'sans': ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'heading': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideIn': 'slideIn 0.6s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-accent': 'var(--gradient-accent)',
      },
    },
  },
  plugins: [],
}
