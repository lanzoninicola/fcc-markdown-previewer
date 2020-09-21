export const colorsPalette = () => {
  return {
    primary: {
      light: "rgb(0, 109, 119, 0.4)",
      main: "rgb(0, 109, 119, 0.8)",
      dark: "rgb(0, 109, 119, 1)",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
    },
    white: {
      light: "",
      main: "rgb(255, 255, 255)",
      dark: "",
    },
    black: {
      light: "",
      main: "rgb(0,0,0)",
      dark: "",
    },
    disabled: {
      light: "rgb(0, 0, 0, 0.2)",
      main: "rgb(0, 0, 0, 0.4)",
      dark: "rgb(0, 0, 0, 0.5)",
    },
    accent: {},
  };
};

export const componentsColorsPalette = (color) => {
  return {
    chartThreshold: {
      primary: {
        undefined: "rgb(0, 0, 0, 0.5)",
        lower: "rgb(71, 235, 211)",
        low: "rgb(34, 193, 195)",
        medium: "rgb(252, 176, 69)",
        high: "rgb(253, 29, 29)",
        higher: "rgb(131, 58, 180)",
      },
    },
    button: {
      primary: {
        borderColor: color("primary").luminance("dark"),
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
  };
};
