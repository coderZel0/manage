/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:'760px',
      lg:'976px',
      xlg:'1440px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        darkBlue:'hsl(228,39%,23%)',
        darkGrayishBlue:'hsl(227,12%,61%)',
        veryDarkBlue:'hsl(223,12%,13%)'
      }
      
    },
  },
  plugins: [],
}
