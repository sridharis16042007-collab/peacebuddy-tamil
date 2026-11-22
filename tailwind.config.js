/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Editorial Wellness Palette
        cream: {
          DEFAULT: '#F8F5F1',
          50: '#FCFAF8',
          100: '#F8F5F1',
          200: '#EFEAE2',
        },
        blush: {
          DEFAULT: '#F6EBEE',
          soft: '#F4D9DF',
          hover: '#EED9DF',
        },
        lavender: {
          DEFAULT: '#F1EAF4',
          soft: '#E8D7F1',
          hover: '#E5DCE9',
        },
        navy: {
          DEFAULT: '#0F2742',
          deep: '#0A1B2E',
          soft: '#1E3B5C',
          muted: '#4A5A6A',
        },
        mauve: {
          DEFAULT: '#8B5E83',
          dark: '#6F4768',
          light: '#A6799E',
          soft: 'rgba(139, 94, 131, 0.12)',
        },
        sage: {
          DEFAULT: '#DDE6DC',
          dark: '#2A5235',
          soft: 'rgba(221, 230, 220, 0.6)',
        },
        peach: {
          DEFAULT: '#FDE2D2',
          dark: '#9A4A1C',
        },
        // Backward-compatibility aliases
        ethereal: {
          bg: '#F8F5F1',
          mist: '#F6EBEE',
          card: '#FFFFFF',
          border: 'rgba(255, 255, 255, 0.85)',
          hover: '#F1EAF4',
        },
        lilac: {
          DEFAULT: '#8B5E83',
          deep: '#6F4768',
          light: '#A6799E',
          soft: 'rgba(139, 94, 131, 0.12)',
          glow: 'rgba(139, 94, 131, 0.25)',
        },
        cosmic: {
          heading: '#0F2742',
          text: '#4A5A6A',
          muted: '#6B7A8A',
          light: '#94A3B3',
        },
        ringBlue: {
          DEFAULT: '#8B5E83',
          hover: '#6F4768',
        },
        ice: {
          DEFAULT: '#F8F5F1',
          surface: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#0F2742',
          secondary: '#4A5A6A',
          muted: '#6B7A8A',
          light: '#94A3B3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Instrument Serif"', 'Georgia', 'serif'],
        tamilSerif: ['"Noto Serif Tamil"', 'serif'],
        sans: ['"DM Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        english: ['"DM Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'card': '28px',
        'pill': '9999px',
        'arch': '210px 210px 40px 40px',
        'calm': '24px',
        'calm-lg': '28px',
        'calm-xl': '32px',
      },
      boxShadow: {
        'glass': '0 20px 60px rgba(15, 39, 66, 0.08)',
        'glass-hover': '0 28px 70px rgba(15, 39, 66, 0.14)',
        'arch': '0 24px 60px rgba(15, 39, 66, 0.12)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite alternate',
        'float-reverse': 'floatReverse 7s ease-in-out infinite alternate',
        'spin-slow': 'spinSlow 25s linear infinite',
        'breathe-glow': 'breatheGlow 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        floatSlow: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(8px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        breatheGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.28' },
          '50%': { transform: 'scale(1.05)', opacity: '0.38' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
