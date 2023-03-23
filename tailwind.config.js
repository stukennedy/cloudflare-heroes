/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './functions/**/*.ts'],
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        100: '58rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        heroes: {
          primary: '#264D73',
          secondary: '#42545C',
          accent: '#3d3d3d',
          neutral: '#1c2025',
          'base-100': '#282C34',
          info: '#7E9EE7',
          success: '#71E0C8',
          warning: '#FBB83C',
          error: '#F36B59',
        },
      },
    ],
  },
};
