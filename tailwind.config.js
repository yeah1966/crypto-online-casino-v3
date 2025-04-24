module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0f0c29',
          secondary: '#302b63',
          tertiary: '#24243e',
        },
        neon: {
          yellow: '#ffdf00',
          orange: '#ff7f50',
          red: '#ff4500',
          pink: '#ff1493',
        },
      },
      fontFamily: {
        casino: ['Orbitron', 'Press Start 2P', 'Luckiest Guy', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        spinwheel: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1440deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        spinwheel: 'spinwheel 5s ease-out forwards',
        fall: 'fall linear forwards',
        'slow-float': 'float 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
