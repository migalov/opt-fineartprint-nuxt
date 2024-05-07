/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ofp: {     
          "primary": "#78DCC7",   
          "blue": "#2D58A7",      
          "yellow": "#FEE278",   
          "red": "#EE6867",    
          "gray": "#F0F0F0",
          "white": "#FFF",
          "black": "#000",
          "dark-gray": "#D9D9D9",
          "ui-blue": "#266EF1",
        },
      },
    ],
    prefix: "ofp-",
    // styled: false
  },
  plugins: [require("daisyui")]
}

