import createTheme from "./core/createTheme";

import palette from "./themes/defaultTheme/palette";
import components from "./themes/defaultTheme/components";
import typography from "./themes/defaultTheme/typography";

import paletteNigthly from "./themes/nigthlyTheme/palette";

const appTheme = createTheme({ palette, typography });

console.log("appTheme", appTheme);

// const applicationTheme = (theme) => {
//   let userTheme = {
//     palette: null,
//     components: null,
//     typography: null,
//   };

//   switch (theme) {
//     case theme === "DEFAULT":
//       userTheme = {
//         palette: palette,
//         components: components,
//         typography: typography,
//       };

//     case theme === "NIGHTLY":
//       userTheme = {
//         palette: paletteNigthly,
//         components: components,
//         typography: typography,
//       };
//     default:
//       userTheme = {
//         ...userTheme,
//       };
//   }

//   appTheme = createTheme(userTheme);
// };

export default appTheme;
