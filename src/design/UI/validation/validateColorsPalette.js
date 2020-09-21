//
// Validation function for "colorsPalette" object
//

function validateColorsPalette(colorsPalette) {
  if (!colorsPalette) {
    throw new Error(
      `UI core module: createTheme(): "colorsPalette" function parameter is missed. You have to pass a colorsPalette function to generate your personal UI theme`
    );
  }

  if (typeof colorsPalette !== "function") {
    throw new Error(
      `UI core module: createTheme(): "colorsPalette" must be a function instead of "${typeof colorsPalette}". Check your in your theme file`
    );
  }

  const userPalette = colorsPalette();

  if (typeof userPalette !== "object") {
    throw new Error(
      `UI core module: createTheme(): the colorsPalette function must returns an object`
    );
  }

  const userPaletteKeys = Object.keys(userPalette);

  if (userPaletteKeys.length === 0) {
    throw new Error(
      `UI core module: createTheme(): the colorsPalette object must contains at least one color palette. You should define a color palettes for your "primary" or "secondary" colors....`
    );
  }

  if (
    userPaletteKeys.indexOf("primary") < 0 ||
    userPaletteKeys.indexOf("primary")
  ) {
    console.warn(
      `UI core module: createTheme(): It seems that you have not defined a "primary" o "secondary" colors. You can ignore this message.`
    );
  }

  let userPaletteKeysTypeOf = [];

  userPaletteKeys.forEach((key) => {
    let keyValue = userPalette[key];
    let keyType = typeof keyValue;
    userPaletteKeysTypeOf.push(keyType);
  });

  const keysTypeNoObject = userPaletteKeysTypeOf.filter(
    (keyType) => keyType !== "object"
  );

  if (keysTypeNoObject.length > 0) {
    throw new Error(
      `UI core module: createTheme(): the color palette must be an object and it should contains at least a value to define the color luminance. Eg. 'light', 'main', 'dark' or 'white' and 'black'`
    );
  }

  const userPaletteDeepestKeys = Object.keys(userPalette[userPaletteKeys[0]]);

  let userPaletteDeepestKeysTypeOf = [];

  userPaletteDeepestKeys.forEach((key) => {
    let keyValue = userPalette[userPaletteKeys[0]][key];
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

export default validateColorsPalette;
