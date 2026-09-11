/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#F56600',
          700: '#EA580C',
          800: '#c2410c',
          900: '#9a3412',
        },
        brown: {
          50:  '#fdf8f5',
          100: '#f5e6d8',
          200: '#e8c9a8',
          300: '#d4a574',
          400: '#b87340',
          500: '#8B4513',
          600: '#6B351B',
          700: '#542A16',
          800: '#4A2414',
          900: '#3A1A0E',
        },
        cream: {
          50:  '#FDFCFB',
          100: '#FFF9F3',
          200: '#FFF7ED',
          300: '#FFF3E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'Noto Sans Devanagari', 'sans-serif'],
      },
      backgroundImage: {
        'saffron-gradient': 'linear-gradient(135deg, #F56600 0%, #f97316 50%, #EA580C 100%)',
        'brown-gradient': 'linear-gradient(135deg, #4A2414 0%, #6B351B 50%, #542A16 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFF9F3 0%, #FFF7ED 100%)',
        'hero-gradient': 'linear-gradient(135deg, #FFF9F3 0%, #FFF7ED 60%, #FFE8D0 100%)',
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(107, 53, 27, 0.08), 0 1px 4px rgba(107, 53, 27, 0.04)',
        'card': '0 2px 12px rgba(107, 53, 27, 0.06), 0 1px 3px rgba(107, 53, 27, 0.04)',
        'hover': '0 8px 32px rgba(245, 102, 0, 0.15), 0 2px 8px rgba(107, 53, 27, 0.08)',
        'nav': '0 1px 16px rgba(107, 53, 27, 0.08)',
        'glass': '0 8px 32px rgba(107, 53, 27, 0.10)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'counter': 'counter 2s ease-out',
        'flow': 'flow 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'progress': 'progress 2.8s ease-in-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
