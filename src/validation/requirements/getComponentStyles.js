export const input = (...args) => {
  const stylesName = args[0];

  if (typeof stylesName !== "string" || !Array.isArray(stylesName)) {
    throw new Error(
      'themeFactory() - getComponentStyles(): The "stylesName" parameter must be a string or array. Eg. "primary" or ["primary","secondary"]...'
    );
  }
};
