/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF6B35',
          pink: '#E91E8C',
          purple: '#7C3AED',
          'light-pink': '#FFD6EC',
          'light-orange': '#FFF0E8',
          'light-purple': '#EDE9FF',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #7C3AED 0%, #E91E8C 50%, #FF6B35 100%)',
        'card-gradient': 'linear-gradient(135deg, #FF6B35 0%, #E91E8C 100%)',
        'section-gradient': 'linear-gradient(180deg, #FFF0E8 0%, #FFD6EC 50%, #EDE9FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 107, 53, 0.4)',
        'glow-pink': '0 0 30px rgba(233, 30, 140, 0.4)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.4)',
        'card': '0 20px 60px rgba(0,0,0,0.08)',
        'card-hover': '0 30px 80px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
