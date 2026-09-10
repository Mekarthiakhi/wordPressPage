/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B1B33',
          50: '#EAEEF4',
          900: '#07142A',
          950: '#050E1F',
        },
        navy: '#0E2749',
        ivory: {
          DEFAULT: '#F6F2EA',
          light: '#FBF9F4',
        },
        champagne: {
          DEFAULT: '#C6A96B',
          light: '#DBC69A',
          dark: '#A98B4E',
        },
        charcoal: '#22262C',
        mist: '#5E7590',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2%,1%)' },
        },
      },
      animation: {
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
