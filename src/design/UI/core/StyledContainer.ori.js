import React, { useEffect, useState } from "react";
import appTheme from "../index";
import hyphenateStyleName from "../utils/hyphenateStyleName";
import isNotValidHTMLTag from "../utils/isNotValidHTMLTag";
import setHTMLAttributes from "../utils/setHTMLAttributes";

const HTML_HEAD_TAG = "head";
const HTML_STYLE_TAG = "style";
const HTML_STYLE_TYPE_ATTRIBUTE = "text/css";

function Styled({
  element = "div",
  id = "",
  belongsTo = "",
  css = {},
  className = "",
  ...otherProps
}) {
  const styleSheetsObjectProp = css;
  const htmlElement = element;
  const htmlNodeId = id;
  const parentComponentRef = belongsTo.toLowerCase();
  const classNameStandardProp = className.split(" ");

  const HTML_HEAD_NODE =
    document.head || document.getElementsByTagName(HTML_HEAD_TAG)[0];
  const STYLED_COMPONENT = "styledcomponent";

  // verificare la presenza del htmlNodeId esporre un warn
  // consigliare la presenza del parentComponentRef

  let styleNode = {
    htmlNodeId,
    parentComponentRef,
    objectCSSClassesName: [],
    standardCSSClassesName: [],
    cssRules: {},
  };

  // cssRules: {
  //   [selectorName]: {
  //     cssText: "",
  //     selectorText: "",
  //     style: "",
  //   },
  // },

  const addComponentIdentifierToCSSClass = parentComponentRef !== "";

  function extractCSSClassesName(stylesheetsObject = {}) {
    console.log("extractCSSClassesName fired", stylesheetsObject);
    Object.keys(stylesheetsObject).forEach((stylesheet) => {
      let CSSClassName = "";

      if (addComponentIdentifierToCSSClass) {
        CSSClassName += `${parentComponentRef}__`;
      }

      CSSClassName += `${stylesheet}`;

      styleNode.objectCSSClassesName.push(CSSClassName);
    });
  }

  function addReactStandardClassNameProp(classNameFromProps) {
    let { standardCSSClassesName } = styleNode;

    standardCSSClassesName = [...standardCSSClassesName, ...classNameFromProps];

    styleNode = {
      ...styleNode,
      standardCSSClassesName,
    };
  }

  // function serializeCSSString(stylesheetsObject) {
  //   console.log("serializeCSSString - stylesheetsObject", stylesheetsObject);
  //   let cssString = "";

  //   // try to use memoize technique
  //   Object.keys(stylesheetsObject).forEach((stylesheet) => {
  //     cssString += `.`;

  //     if (addComponentIdentifierToCSSClass) {
  //       cssString += `${parentComponentRef}__`;
  //     }

  //     cssString += `${stylesheet} {`;

  //     Object.keys(stylesheetsObject[stylesheet]).forEach((stylesheetRule) => {
  //       const stylesheetRuleValue = stylesheetsObject[stylesheet][stylesheetRule];
  //       // manage if it is an private key with underscore (eg. _hover)
  //       // manage if it is and object (child style => "Parent > child" )
  //       // manage if it is a function ((color) => fn(color) or (prop) => fn(prop))

  //       // A CSS property value is explicited defined
  //       if (typeof stylesheetRuleValue === "string") {

  //         cssString += `${hyphenateStyleName(
  //           stylesheetRule
  //         )}: ${stylesheetRuleValue}; `;
  //       }
  //     });
  //     cssString += `} `;
  //   });

  //   return cssString;
  // }

  function buildStylesheetRuleFromString() {}

  function buildCSSRules(stylesheetsObject) {
    let selectorName = "";
    let selectorRule = {};
    let selectorRuleStyle = {};
    let { cssRules } = styleNode;

    // try to use memoize technique
    Object.keys(stylesheetsObject).forEach((stylesheet) => {
      if (addComponentIdentifierToCSSClass) {
        selectorName = `${parentComponentRef}__`;
      }

      selectorName += `${stylesheet}`;

      Object.keys(stylesheetsObject[stylesheet]).forEach((stylesheetRule) => {
        const stylesheetRuleValue =
          stylesheetsObject[stylesheet][stylesheetRule];
        // manage if it is an private key with underscore (eg. _hover)
        // manage if it is and object (child style => "Parent > child" )
        // manage if it is a function ((color) => fn(color) or (prop) => fn(prop))

        // A CSS property value is a string
        if (typeof stylesheetRuleValue === "string") {
          const hyphenatedStylesheetName = hyphenateStyleName(stylesheetRule);
          selectorRuleStyle = {
            ...selectorRuleStyle,
            [hyphenatedStylesheetName]: `${stylesheetRuleValue}`,
          };

          selectorRule = {
            ...selectorRule,
            [selectorName]: {
              selectorText: `${selectorName}`,
              styleText: `${hyphenatedStylesheetName}: ${stylesheetRuleValue}; `,
              style: {
                ...selectorRuleStyle,
              },
            },
          };
        }
      });
    });

    // miss full text of stylesheets

    cssRules = {
      ...cssRules,
      ...selectorRule,
    };
  }

  function buildStyleSheet() {
    const cssRules = buildCSSRules(styleSheetsObjectProp);

    styleNode = {
      ...styleNode,
      cssRules,
    };
  }

  // function buildStyleSheetCSSText() {
  //   const cssString = serializeCSSString(styleSheetsObjectProp);

  //   styleNode = {
  //     ...styleNode,
  //     cssString,
  //   };
  // }

  function DOMCreateStyleNode() {
    const style = document.createElement(HTML_STYLE_TAG);
    const htmlStyleAttributes = {
      type: HTML_STYLE_TYPE_ATTRIBUTE,
      id: STYLED_COMPONENT,
    };

    setHTMLAttributes(style, htmlStyleAttributes);
    HTML_HEAD_NODE.appendChild(style);
  }

  function DOMAttachStyle({ cssString, parentComponentRef }) {
    const style = document.getElementById(STYLED_COMPONENT);

    const sheet = style.sheet;

    const rules = sheet.rules;

    sheet.insertRule(cssString);
    // style.textContent = cssString;

    console.log(rules);

    console.log(style.sheet, style.styleNode);
  }

  // function DOMappendStyle({ cssString, parentComponentRef }) {
  //   // THIS MUST APPEND STYLE NOT CREATE NEW NODE ***********************
  //   // to do
  // }

  function DOMDetachStyle(name) {
    const style = document.getElementsByName(name);
    const style2 = document.getElementById(STYLED_COMPONENT);

    console.dir(style2);

    // const componentStyle = style[0];

    // componentStyle.remove();
  }

  function mergeStylesName(cssObjectName = [], cssStandardName = []) {
    return [...cssObjectName, cssStandardName];
  }

  function convertClassesNameToText() {
    const { objectCSSClassesName, standardCSSClassesName } = styleNode;
    const mergedStylesName = mergeStylesName(
      objectCSSClassesName,
      standardCSSClassesName
    );

    return mergedStylesName.join(" ");
  }

  function isReactStandardClassNameExist() {
    return classNameStandardProp.length > 0 ? true : false;
  }

  function isNotStyleDOMNodeExist() {
    const style = document.getElementById(STYLED_COMPONENT);

    return !style ? true : false;
  }

  function isObjectStyleExist() {
    return styleNode.objectCSSClassesName.length > 0 ? true : false;
  }

  const [classesNames, setClassesNamesToComponent] = useState("");

  useEffect(() => {
    extractCSSClassesName(styleSheetsObjectProp);

    serializeCSSString(styleSheetsObjectProp);

    // if (isReactStandardClassNameExist()) {
    //   addReactStandardClassNameProp(classNameStandardProp);
    // }

    // buildStyleSheetCSSText();

    // if (isNotStyleDOMNodeExist()) {
    //   DOMCreateStyleNode();
    // }

    // if (isObjectStyleExist()) {
    //   DOMAttachStyle(styleNode);
    // }

    // setClassesNamesToComponent(convertClassesNameToText());

    return () => {
      // if (isObjectStyleExist()) {
      //   DOMDetachStyle(parentComponentRef);
      // }
    };
  }, [
    styleNode.objectCSSClassesName.length,
    styleNode.standardCSSClassesName.length,
  ]);

  // check css type format validation

  // requirement 2 - adding html tag requested by the user
  const defaultHTMLTag = "div";
  const JsxTag =
    isNotValidHTMLTag(htmlElement) === false ? htmlElement : defaultHTMLTag;

  return (
    <JsxTag id={`${htmlNodeId}`} className={`${classesNames}`} {...otherProps}>
      {otherProps.children}
    </JsxTag>
  );
}

export default Styled;

/*

==========================================

1. style a nested node // we might use _children property to decorate first level children => props.children[key].type is the dom tag  => use this "child selector": "div>p"

    <div className={"red"}> <-- this class color the nested p element
        <p>Urra</p>
    </div>


2. style the nested element of form

<form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>


3. colorare nested component 

<div class="Select-input">
        <input type="text" name="style-me" />
      </div> 
*/
