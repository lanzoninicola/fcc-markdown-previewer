import createTheme from "./core/createTheme";

import {
  colorPalettes,
  componentsColorPalettes,
} from "./themes/defaultTheme/defaultTheme";

const appTheme = createTheme(colorPalettes, componentsColorPalettes);

export default appTheme;
