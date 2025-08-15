/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'tesla-primary': '#171a20',
        'tesla-secondary': '#393c41',
        'tesla-accent': '#3e6ae1',
        'tesla-success': '#5cb85c',
        'tesla-warning': '#f0ad4e',
        'tesla-danger': '#d9534f',
        'tesla-light': '#f8f9fa',
        'tesla-dark': '#212529',
        'tesla-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        // Apple palette
        'apple-primary': '#007aff',
        'apple-secondary': '#5856d6',
        'apple-success': '#34c759',
        'apple-warning': '#ff9500',
        'apple-danger': '#ff3b30',
        'apple-gray': {
          50: '#f9f9f9',
          100: '#f2f2f7',
          200: '#e5e5ea',
          300: '#d1d1d6',
          400: '#c7c7cc',
          500: '#aeaeb2',
          600: '#8e8e93',
          700: '#636366',
          800: '#48484a',
          900: '#1c1c1e'
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: []
};
