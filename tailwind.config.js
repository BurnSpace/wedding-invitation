/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#faf6ee',
          200: '#f3ead5',
          300: '#ecdfbc',
          400: '#e0cb96',
          500: '#d4b770'
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ecd2',
          200: '#e9d6a5',
          300: '#dcbf78',
          400: '#cda74e',
          500: '#b8893a',
          600: '#946c2e',
          700: '#6f5224'
        },
        blush: {
          100: '#fbeef0',
          200: '#f5d8dd',
          300: '#eebcc4'
        },
        sage: {
          100: '#eef2ea',
          200: '#d9e3d0',
          300: '#bdd0ad'
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        script: ['var(--font-greatvibes)', 'cursive'],
        body: ['var(--font-jost)', 'sans-serif']
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.92)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        fadeInUp: 'fadeInUp 0.9s ease forwards',
        zoomIn: 'zoomIn 0.8s ease forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      }
    }
  },
  plugins: []
};
