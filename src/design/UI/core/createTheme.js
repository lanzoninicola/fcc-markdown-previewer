import themeFactory from "./themeFactory";

import validate from "../../../validation/index";

const createTheme = ({ palette = {}, typography = {} }) => {
  console.log("createTheme fired");
  // validate("createTheme").input().args(themeConfig); to do

  const userPalette = palette();
  // validate("palette").output().currentOutput(userPalette);

  // const userTheme = new themeFactory(userPalette);

  let userTypography = typography();

  if (typography) {
  }

  const designSystemComponents = {
    palette: userPalette,
    typography: userTypography,
  };

  // commented when skipped row 13
  // userTheme.theme = designSystemComponents;

  return new themeFactory(designSystemComponents);
};

export default createTheme;
