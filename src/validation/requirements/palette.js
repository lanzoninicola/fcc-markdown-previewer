export function output(outputData) {
  if (typeof outputData !== "object") {
    throw new Error(
      `UI core module: createTheme(): the palette function must returns an object`
    );
  }

  const userPaletteKeys = Object.keys(outputData);

  if (userPaletteKeys.length === 0) {
    throw new Error(
      `UI core module: createTheme(): the palette object must contains at least one color palette. You should define a color palette for your "primary" or "secondary" colors....`
    );
  }

  if (
    userPaletteKeys.indexOf("primary") < 0 ||
    userPaletteKeys.indexOf("primary")
  ) {
    console.warn(
      `UI core module: palette(): It seems that you have not defined a "primary" or "secondary" color. You can ignore this message.`
    );
  }

  let userPaletteKeysTypeOf = [];

  userPaletteKeys.forEach((key) => {
    let keyValue = outputData[key];
    let keyType = typeof keyValue;
    userPaletteKeysTypeOf.push(keyType);
  });

  const keysTypeNoObject = userPaletteKeysTypeOf.filter(
    (keyType) => keyType !== "object"
  );

  if (keysTypeNoObject.length > 0) {
    throw new Error(
      `UI core module: palette(): the color palette must be an object and it should contains at least a value to define the color shade. Eg. 'light', 'main', 'dark' or 'white' and 'black'`
    );
  }

  const userPaletteDeepestKeys = Object.keys(outputData[userPaletteKeys[0]]);

  let userPaletteDeepestKeysValues = [];

  userPaletteDeepestKeys.forEach((key) => {
    let keyValue = outputData[userPaletteKeys[0]][key];
    userPaletteDeepestKeysValues.push(keyValue);
  });

  const deepestKeysNoDefault = userPaletteDeepestKeys.filter(
    (key) => key === "main"
  );

  if (deepestKeysNoDefault.length === 0) {
    throw new Error(
      `UI core module: palette(): each color must have a "main" color.'`
    );
  }

  const deepestKeysValuesTypeNoString = userPaletteDeepestKeysValues.filter(
    (keyValue) => typeof keyValue !== "string"
  );

  if (deepestKeysValuesTypeNoString.length > 0) {
    throw new Error(
      `UI core module: palette(): each color shade must be a string. Eg. light: 'rgb(0, 109, 119, 0.4)' or dark: 'rgb(0, 109, 119, 1)'`
    );
  }
}
