/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          brandblack: '#292929', 
          brandgreen: '#70B909',
          navbarbutton: '#B6F214',
          greenbutton: '#AAFD33',
          blackbutton: '#131313',
          textgreen: '#AAFD33',
          textheading: '#131313',
          textbody: '#000000',
          cardtext: '#6F6F6F',
          bsicard: '#A8A8A8',
          cardoutline: '#DDDDDD',
          inputfield: '#E7E7E7',
          inputfieldstroke: '#DDDDDD',
          inputfieldtext: '#8D928B',
          navbarstroke: '#5F5F5F',
          rolebg: '#F8F8F8',
          roletext: '#78A401',
          textgreen1:'#5F9C07'

  
  
  
  
          
        },
    },
  },
  plugins: [],
};
