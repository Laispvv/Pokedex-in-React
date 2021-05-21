module.exports = {
  //let tailwind remove unused styles
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'm2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'mxl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'mlg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'mmd': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'msm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
