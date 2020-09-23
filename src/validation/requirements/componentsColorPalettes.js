export function input(...args) {
  if (args[0] instanceof Function === false) {
    throw new Error(
      `UI core module: createTheme(): "componentsColorPalettes" must be a function instead of "${typeof args[0]}". Check your in your theme file.`
    );
  }
}

export function output(outputData) {
  if (outputData !== undefined && typeof outputData !== "object") {
    throw new Error(
      `UI core module: componentsColorPalettes(): the function must returns an object`
    );
  }

  const userComponentsThemeKeys = Object.keys(outputData);

  if (userComponentsThemeKeys.length === 0) {
    throw new Error(
      `UI core module: componentsColorPalettes(): the object returned by the function must contains at least one component. Eg. " button: {} "`
    );
  }

  let userComponentsThemeKeysTypeOf = [];
  let userComponentsThemeDeepestKeysNoClassesNode = [];

  userComponentsThemeKeys.forEach((key) => {
    let keyValue = outputData[key];
    let keyType = typeof keyValue;
    userComponentsThemeKeysTypeOf.push(keyType);

    let classesNode = Object.keys(outputData[key])[0];

    if (classesNode === "classes") {
      userComponentsThemeDeepestKeysNoClassesNode.push(0);
    } else {
      userComponentsThemeDeepestKeysNoClassesNode.push(1);
    }
  });

  const keysTypeNoObject = userComponentsThemeKeysTypeOf.filter(
    (keyType) => keyType !== "object"
  );

  if (keysTypeNoObject.length > 0) {
    throw new Error(
      `UI core module: componentsColorPalettes(): the object returned by the function must contains at least one component object. Eg. " button: {} "`
    );
  }

  const deepestKeyNoClassesNode = userComponentsThemeDeepestKeysNoClassesNode.filter(
    (deepestKeyValue) => deepestKeyValue === 1
  );

  if (deepestKeyNoClassesNode.length > 0) {
    throw new Error(
      `UI core module: componentsColorPalettes(): each component object must contains the "classes" object. Eg. " button: { classes: {} } "`
    );
  }
}
