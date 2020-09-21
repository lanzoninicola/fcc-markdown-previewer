import themeFactory from "./themeFactory";

import ValidationInputOf from "../validation/index";

const createTheme = (colorsPalette, componentsColorsPalette) => {
  ValidationInputOf().colorsPalette(colorsPalette);

  const userPalette = colorsPalette();

  let componentsWithColors = {};

  if (componentsColorsPalette) {
    ValidationInputOf().componentColorsPalette(componentsColorsPalette);

    let themeColorFn = themeFactory().color;
    let themeColorFnWithPalette = (schema) => themeColorFn(schema, userPalette);

    componentsWithColors = componentsColorsPalette(themeColorFnWithPalette);
  }

  const globalPalette = {
    palette: userPalette,
    components: componentsWithColors,
  };

  return themeFactory(globalPalette);
};

export default createTheme;
