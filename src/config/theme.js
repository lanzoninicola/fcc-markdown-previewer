export const palette = {
  primary: {
    light: "rgb(0, 109, 119, 0.4)",
    main: "rgb(0, 109, 119, 0.8)",
    dark: "rgb(0, 109, 119, 1)",
  },
  secondary: {
    light: "",
    main: "",
    dark: "",
  },
  disabled: {
    light: "rgb(0, 0, 0, 0.2)",
    main: "rgb(0, 0, 0, 0.4)",
    dark: "rgb(0, 0, 0, 0.5)",
  },
};

export const getColorFromPalette = (schema) => {
  let defaultSchema = "primary";
  let defaultIntensity = "main";

  if (!schema) {
    console.warn(
      'getColorFromPalette - A color schema has not been defined, default "primary-main" schema has been loaded.'
    );
    return palette.primary.main;
  }

  if (!schema.split("").find((char) => char === "-")) {
    console.warn(
      `getColorFromPalette - Color might be defined like this: "primary-main" instead of "${schema}". Default "primary-main" color has been loaded.`
    );
  }

  let colorSchema = schema.split("-")[0];
  let colorIntensity = schema.split("-")[1];

  if (!colorSchema || !palette[colorSchema]) {
    colorSchema = defaultSchema;
  }

  if (!colorIntensity || !palette[colorSchema][colorIntensity]) {
    colorIntensity = defaultIntensity;
  }

  return palette[colorSchema][colorIntensity];
};
