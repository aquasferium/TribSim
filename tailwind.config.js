/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fundo: '#0A0E17', superficie: '#111827', card: '#1A2235', borda: '#2A3550', ouro: '#C9A84C', 'ouro-claro': '#E2C97E',
        positivo: '#22C55E', negativo: '#EF4444', neutro: '#60A5FA', texto: '#E2E8F0', 'texto-suave': '#94A3B8'
      },
      fontFamily: { display: ['"DM Serif Display"', 'serif'], sans: ['"IBM Plex Sans"', 'sans-serif'], mono: ['"IBM Plex Mono"', 'monospace'] },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.6' } },
        scaleIn: { '0%': { transform: 'scale(0)' }, '100%': { transform: 'scale(1)' } }
      },
      animation: { 'fade-up': 'fadeInUp 0.4s ease forwards', 'slide-right': 'slideInRight 0.3s ease forwards', 'pulse-slow': 'pulse 2s ease-in-out infinite', 'scale-in': 'scaleIn 0.2s cubic-bezier(0.34,1.56,0.64,1) forwards' }
    }
  },
  plugins: []
};
