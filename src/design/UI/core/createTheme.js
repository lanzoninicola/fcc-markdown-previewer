import themeFactory from "./themeFactory";

import validate from "../../../validation/index";

const createTheme = (colorPalettes, componentsColorPalettes) => {
  validate("createTheme").input().args(colorPalettes, componentsColorPalettes);

  const userPalette = colorPalettes();
  validate("colorPalettes").output().currentOutput(userPalette);

  let componentsWithColors = {};

  if (componentsColorPalettes) {
    let themeColorFn = themeFactory().color;
    let themeColorFnWithPalette = (schema) => themeColorFn(schema, userPalette);

    componentsWithColors = componentsColorPalettes(themeColorFnWithPalette);
    validate("componentsColorPalettes")
      .output()
      .currentOutput(componentsWithColors);
  }

  const globalPalette = {
    palette: userPalette,
    components: componentsWithColors,
  };

  return themeFactory(globalPalette);
};

export default createTheme;
