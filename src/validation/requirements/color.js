export function input(...args) {
  if (args.length > 2) {
    throw new Error(
      `themeFactory() - color(): Function accepts only two parameters.`
    );
  }

  const colorParamMissed = () => {
    throw new Error(`themeFactory() - color(): colorName parameter missed`);
  };

  const colorNotFound = (colorAvailable) => {
    throw new Error(
      `themeFactory() - color(): Color not found... You have choose between: "${colorAvailable}"`
    );
  };

  const colorDataType = () => {
    throw new Error(
      'themeFactory(): The "color" parameter must be a "string". Eg. "primary" or "secondary"...'
    );
  };

  const shadeDataType = () => {
    throw new Error(
      'themeFactory(): The "shade" parameter must be a "string". Eg. "main" or "dark" or "light"...'
    );
  };

  const shadeNotFound = (shadeAvailable) => {
    throw new Error(
      `themeFactory() - color(): Shade not found... You have choose between: "${shadeAvailable}"`
    );
  };

  if (args[0] !== null) {
    // validation of first parameter
    if (Array.isArray(args[0])) {
      const [color, theme] = args[0];

      const isColorExists = () =>
        Object.keys(theme["palette"]["colors"]).includes(color);

      if (color === "") {
        colorParamMissed();
      }

      if (color !== "" && !isColorExists()) {
        let colorAvailable = Object.keys(theme["palette"]["colors"]).join(", ");

        colorNotFound(colorAvailable);
      }

      if (color !== "" && typeof color !== "string") {
        colorDataType();
      }
    } else {
      const color = args[0];

      if (color === "") {
        colorParamMissed();
      }

      if (color !== "" && typeof color !== "string") {
        colorDataType();
      }
    }
  }

  if (args[1] !== null) {
    // validation of second parameter
    if (Array.isArray(args[1])) {
      const [shade, themePalette] = args[1];

      const isShadeExists = () => Object.keys(themePalette).includes(shade);

      if (shade !== "" && !isShadeExists()) {
        let shadeAvailable = Object.keys(themePalette).join(", ");
        shadeNotFound(shadeAvailable);
      }

      if (shade !== "" && typeof shade !== "string") {
        shadeDataType();
      }
    } else {
      const shade = args[1];
      if (shade !== "" && typeof shade !== "string") {
        shadeDataType();
      }
    }
  }
}
