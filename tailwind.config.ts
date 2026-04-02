import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249,115,22,0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(249,115,22,0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
