export const input = (...args) => {
  const classesName = args[0];

  if (typeof classesName !== "string" || !Array.isArray(classesName)) {
    throw new Error(
      'themeFactory() - getComponentClasses(): The "classesName" parameter must be a string or array. Eg. "primary" or ["primary","secondary"]...'
    );
  }
};
