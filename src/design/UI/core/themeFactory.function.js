function themeFactory(palette = {}) {
  let themeLoaded = {
    ...palette,
  };

  //
  // Color module
  //
  function color(schema = "", palette = {}) {
    if (palette !== undefined || palette !== null) {
      themeLoaded = {
        ...themeLoaded,
        palette: palette,
      };
    }

    if (schema === undefined || schema === null) {
      return themeLoaded["palette"];
    }

    if (schema && typeof schema !== "string") {
      throw new Error(
        'themeFactory() - color(): The "schema" parameter must be a "string". Eg. "primary" or "secondary"...'
      );
    }

    const isSchemaExists = () => {
      return Object.keys(themeLoaded["palette"]).includes(schema);
    };

    if (schema && !isSchemaExists()) {
      let schemaAvailable = Object.keys(themeLoaded["palette"]).join(", ");
      throw new Error(
        `themeFactory() - color(): Schema "${schema}" not found... You have choose between these: "${schemaAvailable}"`
      );
    }

    function shade(value) {
      //console.log('shade - themeLoaded', themeLoaded['palette'][schema]);
      const defaultShade = "dark";

      if (!value) {
        value = defaultShade;
      }
      return themeLoaded["palette"][schema][value];
    }

    return {
      shade: () => shade(),
    };
  }

  // Component Palette Module

  const components = () => {
    return themeLoaded["components"];
  };

  const componentPalette = (name = "") => {
    if (typeof name !== "string") {
      throw new Error(
        'themeFactory() - componensPalette(): Name parameter must be a "string". Eg. "button", "text"...'
      );
    }

    if (name === "") {
      throw new Error(
        'themeFactory() - componensPalette(): Function needs a parameter with the name of component choosed in the "components()" function.'
      );
    }

    if (!themeLoaded["components"][name]) {
      throw new Error(
        `themeFactory() - componensPalette(): The component "${name}" is not defined inside the theme object and "components" node. Maybe, you have misspelled the component name.`
      );
    }

    const component = themeLoaded["components"][name];

    const colorComponent = (schema = "") => {
      if (typeof schema !== "string") {
        throw new Error(
          'themeFactory() - colorComponent(): The "schema" parameter must be a string. Eg. "primary" or "secondary"...'
        );
      }

      if (schema === undefined || schema === null || !component[schema]) {
        throw new Error(
          `themeFactory - colorComponent(): The color schema "${schema}" for the component "${name}" has not been defined.`
        );
      }

      if (schema) {
        let componentSchemaColors = component[schema];

        const selectors = () => {
          return Object.keys(componentSchemaColors);
        };

        const colorSelectors = () => {
          let obj = {};
          let componentSelectors = selectors();
          componentSelectors.forEach((selector) => {
            let selectorColor = null;
            if (typeof componentSchemaColors[selector] === "function") {
              selectorColor = componentSchemaColors[selector]();
            } else {
              selectorColor = componentSchemaColors[selector];
            }

            obj = { ...obj, [selector]: selectorColor };
          });
          return obj;
        };

        return {
          selectors: () => selectors(),
          colorSelectors: () => colorSelectors(),
        };
      }
    };

    return {
      color: (schema) => colorComponent(schema),
    };
  };

  return {
    show: () => themeLoaded,
    color: (schema, palette) => color(schema, palette),
    components: () => components(),
    component: (name) => componentPalette(name),
  };
}

export default themeFactory;

// THEME OBJECT

// const themeName = {
//   palette: {
//     primary: {
//       light: "",
//       main: "",
//       dark: "",
//       black: "",
//       white: "",
//     },
//     secondary: {
//       light: "",
//       main: "",
//       dark: "",
//       black: "",
//       white: "",
//     },
//     ...
//   },
//   components: {
//     comp1: {
//       primary: {
//         borderColor: () => color("primary").shade("dark"),
//         selector2: ...,
//       }
//     }
//   }
// }

// Retrieve data of all colours palette
//
// themeFactory(standard).palette();

// Get color of specific palette
//
// themeFactory(standard).color('primary').colors;

// Get color of specific palette and shade
//
// themeFactory(standard).color('primary').shade('dark');

// Retrieve data of all Components color palette
//
// themeFactory(standard).components();

// Retrieve component selectors handles by themeFactory
//
// themeFactory(standard).component('button').color('primary').selectors();

// Retrive colors of all component selectors based on schema
//
// themeFactory(standard).component('button').color('primary').colorSelectors();
