import validate from "../../../validation/core/validate";
import jss from "./jss";
import React, { Children } from "react";

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
  //  appTheme.style(obj)  - {cssName: {selector1, selector2}}
  //  appTheme.style(obj)  // {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
  //  appTheme.style(fun1)
  //  appTheme.style(fun1) - return {cssName: {selector1, selector2}}
  //  appTheme.style(fun1 - return {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
  //  appTheme.style([fun1, fun2])

  style = (classSelectors, props) => {
    // verificare che style abbia un parametro --> verifico se necessario se uso return this e poi ifElse
    // verificare che le funzioni inizino con css
    // verificare lo shape dell'oggetto (deve essere di 2 livelli) ritornato dalla funzione css

    let stylesToCSS = {};
    let componentCSSClasses = [];
    let nextProps = {};

    if (typeof classSelectors === "object") {
      //  appTheme.style(cssObj)  - {cssName: {selector1, selector2}}
      //  appTheme.style(cssObj)  - {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
      console.log(classSelectors);

      Object.keys(classSelectors).forEach((cssClass) => {
        stylesToCSS = {
          ...stylesToCSS,
          [cssClass]: classSelectors[cssClass],
        };

        console.log(stylesToCSS);

        const foo = jss.createStyleSheet(stylesToCSS).attach();
        const { classes } = jss.createStyleSheet(stylesToCSS).attach();

        console.log(foo);

        componentCSSClasses.push(classes[cssClass]);
      });
    }

    // requirement 1
    if (props?.className) {
      componentCSSClasses.push(props.className);

      for (let propsItem in props) {
        if (propsItem !== "className") {
          nextProps = {
            ...nextProps,
            [propsItem]: props[propsItem],
          };
        }
      }
    }

    // requirement 2
    const htmlTagFromProps = props?.htmltag;
    const defaultHTMLTag = "div";
    let JsxTag = defaultHTMLTag;

    if (htmlTagFromProps) {
      const isValidHTMLTag = (input) =>
        props?.htmltag.toString() instanceof HTMLUnknownElement;

      console.log(htmlTagFromProps);
      console.log(isValidHTMLTag(htmlTagFromProps));

      JsxTag = isValidHTMLTag(htmlTagFromProps) ? htmlTagFromProps : JsxTag;
    }

    return (
      <JsxTag className={componentCSSClasses.join(" ")} {...nextProps}>
        {props.children}
      </JsxTag>
    );

    // if (typeof classSelectors === "function") {
    //   //  appTheme.style(fun1) - return {cssName: {selector1, selector2}}
    //   //  appTheme.style(fun1) - return {cssName1: {selector1, selector2}, cssName2: {selector1, selector2}}
    //   const cssObjects = classSelectors();

    //   Object.keys(cssObjects).forEach((cssObject) => {
    //     stylesToCSS = {
    //       ...stylesToCSS,
    //       ...cssObject,
    //     };
    //   });
    // }

    // if (Array.isArray(classSelectors)) {
    //   //  appTheme.style([fun1, fun2])
    //   classSelectors.forEach((cssClass) => {
    //     stylesToCSS = {
    //       ...stylesToCSS,
    //       ...cssClass(),
    //     };
    //   });
    // }
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
// themeFactory(standard).component('button').style()

// Retrive colors of all component selectors based on color
//
// appTheme.component('button').style('primary');

// appTheme.component('button').ifElse(condition).then('primary').else('disabled');
