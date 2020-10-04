export const input = (...args) => {
  const componentMustBeString = () => {
    throw new Error(
      'themeFactory() - component(): Component name parameter must be a "string". Eg. "button", "text"...'
    );
  };

  if (Array.isArray(args[0])) {
    const componentName = args[0][0];
    const componentTheme = args[0][1];

    if (typeof componentName !== "string") {
      componentMustBeString();
    }

    if (componentName !== "" && !componentTheme[componentName]) {
      throw new Error(
        `themeFactory() - component(): The component "${componentName}" is not defined inside the theme object and "components" node. Maybe, you have misspelled the component name.`
      );
    }
  } else {
    const componentName = args[0];

    if (typeof componentName !== "string") {
      componentMustBeString();
    }
  }
};
