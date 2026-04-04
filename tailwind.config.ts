import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FFF1F3',
          100: '#FFE0E4',
          200: '#FFC5CC',
          300: '#FF9AA8',
          400: '#FF5C74',
          500: '#FF1744',
          600: '#ED0036',
          700: '#C8002D',
          800: '#A50028',
          900: '#8C0025',
        },
        accent: {
          50:  '#FFF0F6',
          100: '#FFE0ED',
          200: '#FFC6DD',
          300: '#FF9DC3',
          400: '#FF64A0',
          500: '#FF2D75',
          600: '#F00060',
          700: '#CC004E',
          800: '#A80043',
          900: '#8A003B',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink-1': 'blink 1.4s ease-in-out infinite',
        'blink-2': 'blink 1.8s ease-in-out infinite 0.3s',
        'blink-3': 'blink 2.2s ease-in-out infinite 0.6s',
        'blink-4': 'blink 1.6s ease-in-out infinite 0.9s',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': { to: { transform: 'rotate(-360deg)' } },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' },
        },
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,23,68,0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(255,23,68,0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
