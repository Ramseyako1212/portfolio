/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080B10',
          surface: '#0E131F',
          card: '#141B2D',
          border: '#1F293D',
          hover: '#1A233A',
        },
        electric: {
          blue: '#0066FF',
          cyan: '#00F0FF',
          accent: '#38BDF8',
          glow: 'rgba(0, 240, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 240, 255, 0.15)',
        'glow-md': '0 0 25px rgba(0, 240, 255, 0.25)',
        'glow-blue': '0 0 25px rgba(0, 102, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
