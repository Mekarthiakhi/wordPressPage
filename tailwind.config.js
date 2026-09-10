/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yenepoya: {
          DEFAULT: '#82C9C7',
          dark: '#5AA3A1',
          light: '#C7EEF0',
          ice: '#EBF7F8',
          mist: '#F4FAFA',
          soft: '#DDF4F5',
        },
        coral: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#F87171',
        },
        slateText: {
          DEFAULT: '#334155',
          dark: '#0F172A',
          muted: '#64748B',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(130, 201, 199, 0.12)',
        card: '0 8px 30px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
