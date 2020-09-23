import validate from "../../../validation/core/validate";

function themeFactory(palette = {}) {
  let themeLoaded = {
    ...palette,
  };

  //
  //  Color module
  //  The "color" function returns relative color from the global palette
  //
  function getGlobalPalette(schema = "", palette = {}) {
    if (palette !== undefined || palette !== null) {
      themeLoaded = {
        ...themeLoaded,
        palette: palette,
      };
    }

    if (schema === undefined || schema === null) {
      return themeLoaded["palette"];
    }

    validate("getGlobalPalette").input().args(schema, palette);

    const isSchemaExists = () => {
      return Object.keys(themeLoaded["palette"]).includes(schema);
    };

    if (schema && !isSchemaExists()) {
      let schemaAvailable = Object.keys(themeLoaded["palette"]).join(", ");
      throw new Error(
        `themeFactory() - getGlobalPalette(): Schema "${schema}" not found... You have choose between these: "${schemaAvailable}"`
      );
    }

    function luminance(value) {
      const defaultLuminance = "dark";

      if (!value) {
        value = defaultLuminance;
      }
      return themeLoaded["palette"][schema][value];
    }

    return {
      luminance: () => luminance(),
    };
  }

  //
  //  COMPONENT PALETTE MODULE
  //
  const getComponentTheme = (componentName = "") => {
    validate("getComponentTheme").input().args(componentName);

    if (componentName !== "" && !themeLoaded["components"][componentName]) {
      throw new Error(
        `themeFactory() - getComponentTheme(): The component "${componentName}" is not defined inside the theme object and "components" node. Maybe, you have misspelled the component name.`
      );
    }

    const component = themeLoaded["components"][componentName];

    //
    const getListOfComponentsInsideTheme = () => {
      return themeLoaded["components"];
    };

    //
    const getComponentClasses = (classesName = "") => {
      validate("getComponentClasses").input().args(classesName);

      // default values
      if (typeof classesName === "string") {
        classesName = "";
      }

      if (classesName !== "" && !component["classes"][classesName]) {
        throw new Error(
          `themeFactory - getComponentClasses(): The classesName "${classesName}" for the component "${componentName}" has not been defined.`
        );
      }

      let componentClassSelectors = component["classes"][classesName];

      const getComponentCSSSelectorsValues = () => {
        return componentClassSelectors;
      };

      if (classesName !== "") {
        return getComponentCSSSelectorsValues();
      }
      if (classesName === "") {
        return component["classes"];
      }
    };

    //
    const ifElse = (condition) => {
      validate("ifElse").input().args(condition);

      const getComponentClassIfConditionIsTruthy = (classesName) => {
        const classTruthy = getComponentClasses(classesName);

        const getComponentClassIfConditionIsFalsy = (classesName) => {
          const classFalsy = getComponentClasses(classesName);

          return condition ? classTruthy : classFalsy;
        };

        return {
          else: (classesName) =>
            getComponentClassIfConditionIsFalsy(classesName),
        };
      };

      return {
        then: (classesName) =>
          getComponentClassIfConditionIsTruthy(classesName),
      };
    };

    let componentAPIs = {};

    if (componentName !== "") {
      componentAPIs = {
        ...componentAPIs,
        classes: (classesName) => getComponentClasses(classesName),
        ifElse: (condition) => ifElse(condition),
      };
    }

    if (componentName === "") {
      componentAPIs = {
        componentList: Object.keys(getListOfComponentsInsideTheme()),
      };
    }

    return componentAPIs;
  };

  return {
    show: () => themeLoaded,
    color: (schema, palette) => getGlobalPalette(schema, palette),
    component: (componentName) => getComponentTheme(componentName),
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
//         borderColor: () => color("primary").luminance("dark"),
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

// Get color of specific palette and luminance
//
// themeFactory(standard).color('primary').luminance('dark');

// Retrieve data of all Components color palette
//
// themeFactory(standard).components();

// Retrieve component selectors handles by themeFactory
//
// themeFactory(standard).component('button').class()

// Retrive colors of all component selectors based on schema
//
// appTheme.component('button').class('primary');

// appTheme.component('button').ifElse(condition).then('primary').else('disabled');
