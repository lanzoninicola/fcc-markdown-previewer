export function output(outputData) {
  if (typeof outputData !== "object") {
    throw new Error(
      `UI core module: createTheme(): the colorPalettes function must returns an object`
    );
  }

  const userPaletteKeys = Object.keys(outputData);

  if (userPaletteKeys.length === 0) {
    throw new Error(
      `UI core module: createTheme(): the colorPalettes object must contains at least one color palette. You should define a color palettes for your "primary" or "secondary" colors....`
    );
  }

  if (
    userPaletteKeys.indexOf("primary") < 0 ||
    userPaletteKeys.indexOf("primary")
  ) {
    console.warn(
      `UI core module: colorPalettes(): It seems that you have not defined a "primary" or "secondary" color. You can ignore this message.`
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
      `UI core module: colorPalettes(): the color palette must be an object and it should contains at least a value to define the color luminance. Eg. 'light', 'main', 'dark' or 'white' and 'black'`
    );
  }

  const userPaletteDeepestKeys = Object.keys(outputData[userPaletteKeys[0]]);

  let userPaletteDeepestKeysTypeOf = [];

  userPaletteDeepestKeys.forEach((key) => {
    let keyValue = outputData[userPaletteKeys[0]][key];
    let keyType = typeof keyValue;
    userPaletteDeepestKeysTypeOf.push(keyType);
  });

  const deepestKeysTypeNoObject = userPaletteDeepestKeysTypeOf.filter(
    (keyType) => keyType !== "string"
  );

  if (deepestKeysTypeNoObject.length > 0) {
    throw new Error(
      `UI core module: createTheme(): each value of color luminance must be a string. Eg. primary: {light: 'rgb(0, 109, 119, 0.4)' or dark: 'rgb(0, 109, 119, 1)'}`
    );
  }
}
