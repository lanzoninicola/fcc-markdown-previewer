import createTheme from "./core/createTheme";

import {
  colorsPalette,
  componentsColorsPalette,
} from "./themes/defaultTheme/defaultTheme";

const appTheme = createTheme(colorsPalette, componentsColorsPalette);

export default appTheme;
