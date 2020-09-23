export const input = (...args) => {
  const componentName = args[0];

  if (typeof componentName !== "string") {
    throw new Error(
      'themeFactory() - getComponentTheme(): Name parameter must be a "string". Eg. "button", "text"...'
    );
  }
};
