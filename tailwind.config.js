/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './js/*.js',
    './data/*.js'
  ],
  theme: {
    screens: {
      // mobileSM: '320px',
      // mobileMD: '375px',
      // mobileLG: '425px',
      // tablet: '768px',
      // laptop: '1024px',
      // laptopLG: '1440px',
      // max: '2560px',

      mobileSM: '20em',      // 320px / 16 = 20em
      mobileMD: '23.4375em', // 375px / 16 = 23.4375em
      mobileLG: '26.5625em', // 425px / 16 = 26.5625em
      tablet: '48em',        // 768px / 16 = 48em
      laptop: '64em',        // 1024px / 16 = 64em
      laptopLG: '90em',      // 1440px / 16 = 90em
      bigDesktop: '112.5em',
      max: '160em',          // 2560px / 16 = 160em


    },
    fontFamily: {
      montsert: ['Montserrat', 'sans-serif'],
      bebasN: ['Bebas Neue', 'sans-serif'],
    },
    extend: {
      colors:{
        primary: '#0012A4',
        secondary: '#8CDFFF',
        category: '#aaaaaa',
        soap: '#2bacdf',
        dishwashing: '#1faf1a',
        diy: '#383838'
      },
    },
  },
  plugins: [],
}

