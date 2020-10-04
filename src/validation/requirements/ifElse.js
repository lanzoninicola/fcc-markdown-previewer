export const input = (...args) => {
  const condition = args[0];

  if (
    condition &&
    typeof condition !== "boolean" &&
    typeof condition !== "string"
  ) {
    throw new Error(
      'themeFactory() - ifElse(): The "condition" parameter must be a "boolean" or "string".'
    );
  }
};
