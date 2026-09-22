/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep graphite / black base
        base: {
          950: '#06070d',
          900: '#0a0c14',
          850: '#0d1018',
          800: '#11141d',
          750: '#161a24',
          700: '#1b1f2b',
          650: '#21252f',
          600: '#272c38',
          500: '#2f3441',
          400: '#3a404f',
          300: '#4a5060',
        },
        // Navy tones
        navy: {
          900: '#0c1020',
          800: '#101630',
          700: '#162042',
          600: '#1d2a55',
          500: '#26366b',
        },
        // Electric violet / blue accent
        accent: {
          50: '#f1edff',
          100: '#e3dbff',
          200: '#c7b8ff',
          300: '#a892ff',
          400: '#8a6dff',
          500: '#6d4dff',
          600: '#5a35f0',
          700: '#4a28d4',
          800: '#3c21ab',
          900: '#311d87',
        },
        cyan: {
          400: '#38e0ff',
          500: '#1cc8f0',
          600: '#0aa6d0',
        },
        // Semantic
        success: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        danger: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        xl: '14px',
        '2xl': '18px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(109, 77, 255, 0.18), 0 8px 40px -12px rgba(109, 77, 255, 0.35)',
        'glow-sm': '0 0 0 1px rgba(109, 77, 255, 0.14), 0 4px 20px -8px rgba(109, 77, 255, 0.25)',
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 48px -16px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-up': 'fade-up 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-in': 'scale-in 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        shimmer: 'shimmer 1.6s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
