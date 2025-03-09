/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
          md:"800px"
    },
    extend: {

      // This is for all margin,padding,height and widht
    spacing:{
      "11":"10rem",
      "15":"100px",
      "px-8":"8px",
      "10":"10px",
      "tt-100":"100px",
      "200":"200px"
    },


    fontFamily:{
      serif:["Lato", "serif"]
    }




      // padding:{
      //   "21":"6rem",
      //   "11":"11px",
      //   "px-8":"8px"
        
      // },

      // margin:{
      //   "21":"10rem",
      //   "11":"10rem"
      // },

      // height:{
      //   "11":"100px"
      // }

      // This is for breakpoint file
  //     screens:{
  //       md:"800px",
  //       lg:"1000px"
  // },
    },
    container:{
      center:true
    }
  },
  plugins: [],
}

