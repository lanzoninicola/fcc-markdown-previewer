// import { appTheme } from "../../index";

// // // 1. Export the color function
// const color = appTheme().color();

// 2. Define the theme object
const defaultTheme = {
  palette: {
    primary: {
      light: "rgb(0, 109, 119, 0.4)",
      main: "rgb(0, 109, 119, 0.8)",
      dark: "rgb(0, 109, 119, 1)",
      black: "rgb(0,0,0)",
      white: "rgb(255, 255, 255)",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
      black: "rgb(0,0,0)",
      white: "rgb(255, 255, 255)",
    },
    disabled: {
      light: "rgb(0, 0, 0, 0.2)",
      main: "rgb(0, 0, 0, 0.4)",
      dark: "rgb(0, 0, 0, 0.5)",
      black: "rgb(0,0,0)",
      white: "rgb(255, 255, 255)",
    },
  },

  components: {
    chartThreshold: {
      undefined: "rgb(0, 0, 0, 0.5)",
      lower: "rgb(71, 235, 211)",
      low: "rgb(34, 193, 195)",
      medium: "rgb(252, 176, 69)",
      high: "rgb(253, 29, 29)",
      higher: "rgb(131, 58, 180)",
    },
    button: {
      primary: {
        // borderColor: () => color("primary").luminance("dark"), //"rgb(0, 109, 119, 0.4)",
        borderColor: this, //"rgb(0, 109, 119, 0.4)",
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(0, 109, 119, 1)",
      },
      secondary: {
        borderColor: "rgb(0, 109, 119)",
        color: "rgb(0, 109, 119)",
        backgroundColor: "rgb(255, 255, 255)",
      },
      disabled: {
        backgroundColor: "rgb(0, 109, 119, 0.1)",
        color: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 109, 119, 0.1)",
      },
    },
  },
  style: {
    flex: {
      display: "flex",
    },
  },
};

export default defaultTheme;
