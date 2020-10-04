import validate from "../../../validation/core/validate";
import jss from "./jss";

class themeFactory {
  constructor(designSystemComponents = {}) {
    this.theme = { ...designSystemComponents };
  }

  static hasOwnProperty = Object.prototype.hasOwnProperty;

  show = () => {
    return this.theme;
  };

  colors = () => {
    return this.theme["palette"]["colors"];
  };

  ///*** Start of "color" ***///
  color(colorName = "", shade = "") {
    this.themePalette = {};

    validate("color").input().args([colorName, this.theme], null);

    this.themePalette = { ...this.theme["palette"]["colors"][colorName] };

    validate("color").input().args(null, [shade, this.themePalette]);

    return this.themePalette[shade];
  }
  ///*** End of "color" ***///

  /*** Start of "ifElse" ***/
  ifElse = (condition) => {
    validate("ifElse").input().args(condition);

    let truthy = "";
    let falsy = "";

    this.then = (thenState) => {
      if (thenState instanceof Function) {
        console.log("then fired");
        truthy = thenState();
      } else {
        truthy = thenState;
      }
      return this;
    };

    this.else = (elseState) => {
      if (elseState instanceof Function) {
        falsy = elseState();
      } else {
        falsy = elseState;
      }
      return this.exec();
    };

    this.exec = () => {
      return condition ? truthy : falsy;
    };

    return this;
  };
  /*** End of "ifElse" ***/

  ///*** Start of CLASSES MODULE ***///
  //
  //  appTheme.classes(obj)  - {cssName: {selector1, selector2}}
  //  appTheme.classes(obj)  // {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
  //  appTheme.classes(fun1)
  //  appTheme.classes(fun1) - return {cssName: {selector1, selector2}}
  //  appTheme.classes(fun1 - return {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
  //  appTheme.classes([fun1, fun2])

  classes = (cssClasses) => {
    // verificare che classes abbia un parametro --> verifico se necessario se uso return this e poi ifElse
    // verificare che le funzioni inizino con css
    // verificare lo shape dell'oggetto (deve essere di 2 livelli) ritornato dalla funzione css

    let stylesToCSS = {};
    let htmlNodeClass = {};

    if (typeof cssClasses === "object") {
      //  appTheme.classes(cssObj)  - {cssName: {selector1, selector2}}
      //  appTheme.classes(cssObj)  - {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
      console.log(cssClasses);

      Object.keys(cssClasses).forEach((cssClass) => {
        console.log(cssClasses, cssClass);
        stylesToCSS = {
          ...stylesToCSS,
          [cssClass]: cssClasses[cssClass],
        };
      });
    }

    if (typeof cssClasses === "function") {
      //  appTheme.classes(fun1) - return {cssName: {selector1, selector2}}
      //  appTheme.classes(fun1) - return {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
      const cssObjects = cssClasses();

      Object.keys(cssObjects).forEach((cssObject) => {
        stylesToCSS = {
          ...stylesToCSS,
          ...cssObject,
        };
      });
    }

    if (Array.isArray(cssClasses)) {
      //  appTheme.classes([fun1, fun2])
      cssClasses.forEach((cssClass) => {
        stylesToCSS = {
          ...stylesToCSS,
          ...cssClass(),
        };
      });
    }

    console.log(stylesToCSS);

    // Compile styles, apply plugins.
    const { classes } = jss.createStyleSheet(stylesToCSS).attach();

    console.log(classes);
    return classes;
  };

  //   ///*** Start of "ifElse" ***///
  //   const ifElse = (condition) => {
  //     validate("ifElse").input().args(condition);

  //     const getClassIfConditionIsTruthy = (cssClasses) => {
  //       const truthyValue = getClassesSelectors(cssClasses);

  //       const getClassIfConditionIsFalsy = (cssClasses) => {
  //         const falsyValue = getClassesSelectors(cssClasses);

  //         return condition ? truthyValue : falsyValue;
  //       };

  //       return {
  //         else: (cssClasses) => getClassIfConditionIsFalsy(cssClasses),
  //       };
  //     };

  //     return {
  //       then: (cssClasses) => getClassIfConditionIsTruthy(cssClasses),
  //     };
  //   };
  //   ///*** End of "ifElse" ***///

  //   return classesAPIs;
  // }
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
// themeFactory(standard).component('button').class()

// Retrive colors of all component selectors based on color
//
// appTheme.component('button').class('primary');

// appTheme.component('button').ifElse(condition).then('primary').else('disabled');
