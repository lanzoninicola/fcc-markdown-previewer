import themeFactory from "./themeFactory";

import validate from "../../../validation/index";

const createTheme = (
  // themeConfig = { palette: null, typography: null, components: null } // marked for next release
  themeConfig = { palette: null, typography: null }
) => {
  validate("createTheme").input().args(themeConfig);

  // const { palette, typography, components } = themeConfig; // marked for next release
  const { palette, typography } = themeConfig;

  const userPalette = palette();
  validate("palette").output().currentOutput(userPalette);

  const userTheme = new themeFactory(userPalette); // this row is mandatory for the code from 19 to 28 due to function reference between color palette and color function used by component

  // next release
  // let userComponents = {};

  // if (components) {
  //   let themeColorFn = userTheme.color;
  //   let themeColorFnWithPalette = (schema) => themeColorFn(schema);

  //   userComponents = components(themeColorFnWithPalette);
  //   validate("components").output().currentOutput(userComponents);
  // }

  let userTypography = {};

  if (typography) {
  }

  const globalPalette = {
    palette: userPalette,
    // components: userComponents, // marked for next release
    typography: userTypography,
  };

  userTheme.themeLoaded = globalPalette;

  return userTheme;
};

export default createTheme;
