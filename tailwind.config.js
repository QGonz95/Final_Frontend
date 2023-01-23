/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      ish: '#00A699',
      blue: '#1DA1F2',
      red: '#FF0000',
      nered: '#E50914',
      orange: '#FC642D',
      amazon: '#FF9900',
      black: '#000000',
      white: 'white',
      alb: '#282828',
      dg: '#657786',
      lig: '#AAB8C2',
      elg: '#E1E8ED',
      eelg: '#F5F8FA',
      ligr: '#25D366',
      tegr: '#128C7E',
      dtegr: '#075E54',
  },
  },
  plugins: [],
});
