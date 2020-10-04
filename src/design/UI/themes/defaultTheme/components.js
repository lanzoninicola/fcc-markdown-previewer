const components = (color) => {
  return {
    LocalStorageFilledCircle: {
      styles: {
        primary: {
          undefined: "rgb(0, 0, 0, 0.5)",
          lower: "rgb(71, 235, 211)",
          low: "rgb(34, 193, 195)",
          medium: "rgb(252, 176, 69)",
          high: "rgb(253, 29, 29)",
          higher: "rgb(131, 58, 180)",
        },
      },
    },
    button: {
      styles: {
        primary: {
          borderColor: color("primary"),
          color: color("white", "main"),
          backgroundColor: color("primary", "dark"),
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
    modal: {
      styles: {},
    },
  };
};

export default components;
