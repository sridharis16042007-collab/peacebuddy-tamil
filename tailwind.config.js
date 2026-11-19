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
        navy: {
          DEFAULT: '#0B3D6B',
          deep: '#072644',
          light: '#13538F',
          soft: 'rgba(11, 61, 107, 0.08)'
        },
        ringBlue: {
          DEFAULT: '#1583C7',
          hover: '#106DA7',
          soft: 'rgba(21, 131, 199, 0.12)'
        },
        ice: {
          DEFAULT: '#F4F9FD',
          surface: '#FFFFFF',
        },
        mist: {
          DEFAULT: '#DCEEFA',
          subtle: '#EBF4FB',
        },
        ink: {
          DEFAULT: '#12263A',
          secondary: '#36526D',
          muted: '#5A758E',
          light: '#8FA6BC'
        },
        softAccent: {
          DEFAULT: '#8FC5E8',
          light: '#BEE0F6',
          glow: 'rgba(143, 197, 232, 0.35)'
        }
      },
      fontFamily: {
        tamil: ['Noto Sans Tamil', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(21, 131, 199, 0.15)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 35px rgba(21, 131, 199, 0.32)' },
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
