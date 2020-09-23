export function input(...args) {
  const schema = args[0];

  if (schema && typeof schema !== "string") {
    throw new Error(
      'themeFactory() - getGlobalPalette(): The "schema" parameter must be a "string". Eg. "primary" or "secondary"...'
    );
  }
}
