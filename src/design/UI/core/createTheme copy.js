import themeFactory from "./themeFactory";

import validate from "../../../validation/index";

const createTheme = (palette, components, typography) => {
  validate("createTheme").input().args(palette, components, typography);

  const userTheme = new themeFactory();

  console.log(userTheme);

  const userPalette = palette();
  validate("palette").output().currentOutput(userPalette);

  let userComponents = {};

  if (components) {
    let themeColorFn = userTheme.color;
    let themeColorFnWithPalette = (schema) => themeColorFn(schema, userPalette);

    userComponents = components(themeColorFnWithPalette);
    validate("components").output().currentOutput(userComponents);
  }

  let userTypography = {};

  if (typography) {
  }

  const globalPalette = {
    palette: userPalette,
    components: userComponents,
    typography: userTypography,
  };

  console.log("userTheme", userTheme);

  // return userTheme;
};

export default createTheme;
