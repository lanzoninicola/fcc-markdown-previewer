export function input(...args) {
  let colorPaletteFn = args[0];
  let componentsColorPalettes = args[1];

  if (colorPaletteFn instanceof Function === false) {
    throw new Error(
      `UI core module: createTheme(): The first argument of function must be a "function"`
    );
  }

  if (
    componentsColorPalettes !== undefined &&
    args[1] instanceof Function === false
  ) {
    throw new Error(
      `UI core module: createTheme(): The second argument of function must be a "function"`
    );
  }
}
