import validate from "../../../../validation/core/validate";
import jss from "./jss";

function themeFactory(designSystemComponents = {}) {
  this.theme = { ...designSystemComponents };

  console.log("themeFactory - this.theme: ", this.theme);

  this.show = function () {
    return this.theme;
  };

  this.colors = () => {
    return this.theme["palette"]["colors"];
  };

  ///*** Start of "color" ***///
  this.color = (colorName = "", shade = "") => {
    this.themePalette = {};

    validate("color").input().args([colorName, this.theme], null);

    this.themePalette = { ...this.theme["palette"]["colors"][colorName] };

    validate("color").input().args(null, [shade, this.themePalette]);

    return this.themePalette[shade];
  }; //
  ///*** End of "color" ***///

  /*** Start of "ifElse" ***/
  this.ifElse = function (condition) {
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
      return this.execIfElseStatement();
    };

    this.execIfElseStatement = () => {
      return condition ? truthy : falsy;
    };

    return this;
  };
  /*** End of "ifElse" ***/

  ///*** Start of CLASSES MODULE ***///
  this.classes = (classesName) => {
    let style = {};
    let componentClass = {};

    if (Array.isArray(classesName)) {
    } else {
      componentClass = classesName();
    }

    style = {
      ...style,
      ...componentClass,
    };

    // Create your style.
    // const style = {
    //   myButton: {
    //     marginLeft: "5px",
    //     marginRight: "5px",
    //     minWidth: "140px",
    //     height: "40px",
    //     borderRadius: "50px",
    //     fontFamily: '"Hind", Helvetica, sans-serif',
    //     fontSize: "16px",
    //     fontWeight: "600",
    //     cursor: "pointer",
    //   },
    // };

    // Compile styles, apply plugins.
    const sheet = jss.createStyleSheet(style).attach();

    console.log(sheet.classes);
    return this;
  };

  //   ///*** Start of "ifElse" ***///
  //   const ifElse = (condition) => {
  //     validate("ifElse").input().args(condition);

  //     const getClassIfConditionIsTruthy = (classesName) => {
  //       const truthyValue = getClassesSelectors(classesName);

  //       const getClassIfConditionIsFalsy = (classesName) => {
  //         const falsyValue = getClassesSelectors(classesName);

  //         return condition ? truthyValue : falsyValue;
  //       };

  //       return {
  //         else: (classesName) => getClassIfConditionIsFalsy(classesName),
  //       };
  //     };

  //     return {
  //       then: (classesName) => getClassIfConditionIsTruthy(classesName),
  //     };
  //   };
  //   ///*** End of "ifElse" ***///

  //   return classesAPIs;
  // }

  return this;
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
