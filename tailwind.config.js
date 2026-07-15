/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 12px 40px rgba(37, 99, 235, 0.12)',
        glass: '0 8px 32px rgba(37, 99, 235, 0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flowDash: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        arrowBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
        lineGrow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'flow-dash': 'flowDash 1.2s linear infinite',
        'arrow-bounce': 'arrowBounce 1.8s ease-in-out infinite',
        'line-grow': 'lineGrow 0.6s ease-out forwards',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
