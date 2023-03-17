/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { min: '304px', max: '767px' },

        md: { min: '768px', max: '1246px' },

        lg: { min: '1246px', max: '1535px' },

        xl: { min: '1280px', max: '1535px' },
        // '2xl': { min: '1536px' },
      },
      colors: {
        lightGreen: '#9BFF00',
        lemon: '#DBFD51',
        upText: '#666666',
        white: '#FFFFFF',
        black: '#000000',
        background: '#111111',
      },
    },
  },
  plugins: [],
};
