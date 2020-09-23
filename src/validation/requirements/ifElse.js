export const input = (...args) => {
  const condition = args[0];

  if (condition && typeof condition !== "Boolean") {
    throw new Error(
      'themeFactory() - ifElse(): The "condition" parameter must be a "boolean".'
    );
  }
};
