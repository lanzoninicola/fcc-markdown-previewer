export function input(...args) {
  if (args[0] instanceof Function === false) {
    throw new Error(
      `UI core module: createTheme(): "components" must be a function instead of "${typeof args[0]}". Check your in your theme file.`
    );
  }
}

export function output(outputData) {
  if (outputData !== undefined && typeof outputData !== "object") {
    throw new Error(
      `UI core module: components(): the function must returns an object`
    );
  }

  const userComponentsThemeKeys = Object.keys(outputData);

  if (userComponentsThemeKeys.length === 0) {
    throw new Error(
      `UI core module: components(): the object returned by the function must contains at least one component. Eg. " button: {} "`
    );
  }

  let userComponentsThemeKeysTypeOf = [];
  let userComponentsThemeDeepestKeysNoClassesNode = [];

  userComponentsThemeKeys.forEach((key) => {
    let keyValue = outputData[key];
    let keyType = typeof keyValue;
    userComponentsThemeKeysTypeOf.push(keyType);

    let stylesNode = Object.keys(outputData[key])[0];

    if (stylesNode === "styles") {
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
      `UI core module: components(): the object returned by the function must contains at least one component object. Eg. " button: {} "`
    );
  }

  const deepestKeyNoClassesNode = userComponentsThemeDeepestKeysNoClassesNode.filter(
    (deepestKeyValue) => deepestKeyValue === 1
  );

  if (deepestKeyNoClassesNode.length > 0) {
    throw new Error(
      `UI core module: components(): each component object must contains the "styles" object. Eg. " button: { styles: {} } "`
    );
  }
}
