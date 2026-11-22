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
        // Ethereal Cloud & Lilac Theme (Soul Serenity Model)
        ethereal: {
          bg: '#FDFBFE',
          mist: '#F5EFF7',
          card: '#FFFFFF',
          border: '#E8DFEF',
          hover: '#EFE7F6',
        },
        lilac: {
          DEFAULT: '#7E6C9E',
          deep: '#624F85',
          light: '#9B8BB8',
          soft: 'rgba(126, 108, 158, 0.12)',
          glow: 'rgba(126, 108, 158, 0.25)',
        },
        cosmic: {
          heading: '#2D2342',
          text: '#453959',
          muted: '#7A6E91',
          light: '#A398B8',
        },
        // Kept for backward compatibility
        navy: {
          DEFAULT: '#2D2342',
          deep: '#1F1730',
          light: '#423560',
        },
        ringBlue: {
          DEFAULT: '#7E6C9E',
          hover: '#624F85',
        },
        ice: {
          DEFAULT: '#FDFBFE',
          surface: '#FFFFFF',
        },
        mist: {
          DEFAULT: '#F5EFF7',
          subtle: '#FAF6FB',
        },
        ink: {
          DEFAULT: '#2D2342',
          secondary: '#453959',
          muted: '#7A6E91',
          light: '#A398B8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        tamilSerif: ['"Noto Serif Tamil"', 'serif'],
        tamil: ['"Noto Sans Tamil"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        english: ['Inter', 'Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'pill': '9999px',
        'calm': '20px',
        'calm-lg': '28px',
      },
      animation: {
        'breathe-glow': 'breatheGlow 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        breatheGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 25px rgba(126, 108, 158, 0.2)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 45px rgba(126, 108, 158, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
