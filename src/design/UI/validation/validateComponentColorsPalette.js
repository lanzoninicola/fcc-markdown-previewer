//
// Validation function for "validateComponentColorsPalette" object
//

export function validateComponentColorsPalette(componentsColorsPalette) {
  if (typeof componentsColorsPalette !== "function") {
    throw new Error(
      `UI core module: createTheme(): "componentsColorsPalette" must be a function instead of "${typeof componentsColorsPalette}". Check your in your theme file`
    );
  }
}

export default validateComponentColorsPalette;
