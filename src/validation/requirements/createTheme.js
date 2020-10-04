export function input(...args) {
  let themeConfig = args[0];

  const { palette, components, typography } = themeConfig;

  if (typeof themeConfig !== "object") {
    throw new Error(
      `UI core module: createTheme(): argument must be an object.`
    );
  }

  if (palette instanceof Function === false) {
    throw new Error(
      `UI core module: createTheme(): The "palette" key of "userTheme" object must be a "function"`
    );
  }

  if (
    components !== null &&
    components !== undefined &&
    components instanceof Function === false
  ) {
    throw new Error(
      `UI core module: createTheme(): The "components" key of "userTheme" object must be a "function"`
    );
  }

  if (
    typography !== null &&
    typography !== undefined &&
    typography instanceof Function === false
  ) {
    throw new Error(
      `UI core module: createTheme(): The "typography" key of "userTheme" object must be a "function"`
    );
  }
}
