/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F5FF',
        secondary: '#8B5CF6',
        accent: '#A78BFA',
        dark: '#050816',
        card: '#111827',
        'card-light': '#1F2937',
        'text-muted': '#9CA3AF',
        'border-glow': 'rgba(0,245,255,0.2)',
        emerald: {
          DEFAULT: '#10B981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(0,245,255,0.07) 0%, transparent 70%)',
        'purple-glow': 'radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'typing-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,245,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,245,255,0.6), 0 0 80px rgba(0,245,255,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,245,255,0.3), 0 0 40px rgba(0,245,255,0.1)',
        'glow-purple': '0 0 20px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,245,255,0.15)',
      },
    },
  },
  plugins: [],
}
