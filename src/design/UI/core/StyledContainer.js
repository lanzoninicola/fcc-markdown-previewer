import React, { useEffect, useState } from "react";
import appTheme from "../index";
import hyphenateStyleName from "../utils/hyphenateStyleName";
import isNotValidHTMLTag from "../utils/isNotValidHTMLTag";
import setHTMLAttributes from "../utils/setHTMLAttributes";

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  console.error("NODE_ENV not set");
  process.exit(1);
}

const __DEV__ = NODE_ENV === "development";

const warn = console.warn;

const HTML_HEAD_TAG = "head";
const HTML_STYLE_TAG = "style";
const HTML_STYLE_TYPE_ATTRIBUTE = "text/css";

const HTML_HEAD_NODE =
  document.head || document.getElementsByTagName(HTML_HEAD_TAG)[0];
const STYLED_COMPONENT = "styledcomponent";

export let appStylesheets = {
  // htmlNodeId,
  // parentComponentRef: "",
  objectCSSClassesName: [],
  standardCSSClassesName: [],
  cssRules: {},
  stylesheets: {
    /*
    [stylesheetName] = checksum(rule) 
  */
  },
};

// const addComponentIdentifierToCSSClass = appStylesheets.parentComponentRef !== "";

function buildCSSRules(stylesheetsObject = {}, componentName = "") {
  let selectorName = "";
  let selectorRule = {};
  let selectorRuleProps = {};
  let { cssRules } = appStylesheets;

  // try to use memoize technique
  Object.keys(stylesheetsObject).forEach((stylesheet) => {
    if (componentName !== "") {
      selectorName = `${componentName}__${stylesheet}`;
    } else {
      selectorName = `${stylesheet}`;
    }

    selectorRule = {
      ...selectorRule,
      [selectorName]: {
        selectorText: `${selectorName}`,
      },
    };

    let selectorRulePropValueText = "";

    Object.keys(stylesheetsObject[stylesheet]).forEach((stylesheetRule) => {
      const stylesheetRuleValue = stylesheetsObject[stylesheet][stylesheetRule];

      let hyphenatedStylesheetName = "";
      let selectorRuleProp = {};

      // manage if it is an private key with underscore (eg. _hover)
      // manage if it is and object (child style => "Parent > child" )
      // manage if it is a function ((color) => fn(color) or (prop) => fn(prop))

      //*** A CSS property value is a string ***//
      if (typeof stylesheetRuleValue === "function") {
        console.log(
          "stylesheetRuleValue - type function",
          stylesheetsObject[stylesheetRule]
        );
      }

      //*** A CSS property value is a string ***//
      if (typeof stylesheetRuleValue === "string") {
        hyphenatedStylesheetName = hyphenateStyleName(stylesheetRule);
        selectorRuleProp = {
          [hyphenatedStylesheetName]: `${stylesheetRuleValue}`,
        };

        selectorRulePropValueText += `${hyphenatedStylesheetName}: ${stylesheetRuleValue}; `;
      }

      selectorRuleProps = {
        ...selectorRuleProps,
        ...selectorRuleProp,
      };

      selectorRule[selectorName].style = {
        ...selectorRuleProps,
      };
    });

    selectorRule[
      selectorName
    ].selectorStyleText = selectorRulePropValueText.trim();
  });

  // miss full text of stylesheets

  cssRules = {
    ...cssRules,
    ...selectorRule,
  };

  appStylesheets = {
    ...appStylesheets,
    cssRules,
  };
}

function buildStyleSheets() {
  let { cssRules } = appStylesheets;

  let ruleText = "";
  let rulesText = "";
  let componentStyles = {};

  Object.keys(cssRules).forEach((stylesheet) => {
    let selectorText = cssRules[stylesheet]["selectorText"];
    let selectorStyleText = cssRules[stylesheet]["selectorStyleText"];

    let text = `.${selectorText} {${selectorStyleText}} `;
    ruleText = text;
    rulesText += text;

    cssRules[stylesheet].ruleText = ruleText.trim();

    componentStyles = {
      ...componentStyles,
      [stylesheet]: selectorStyleText,
    };
  });

  appStylesheets = {
    ...appStylesheets,
    rulesText: rulesText.trim(),
    stylesheets: componentStyles,
  };
}

function extractCSSClassesName(stylesheetsObject = {}, componentName = "") {
  // console.log("extractCSSClassesName fired", stylesheetsObject);
  Object.keys(stylesheetsObject).forEach((stylesheet) => {
    let CSSClassName = "";

    if (componentName !== "") {
      CSSClassName += `${componentName}__${stylesheet}`;
    } else {
      CSSClassName = `${stylesheet}`;
    }

    appStylesheets.objectCSSClassesName.push(CSSClassName);
  });
}

function isNotStyleDOMNodeExist() {
  const style = document.getElementById(STYLED_COMPONENT);

  return !style ? true : false;
}

// qui devo verificare negli stylesheets globali
function isObjectStyleExist() {
  return appStylesheets.objectCSSClassesName.length > 0 ? true : false;
}

function DOMCreateStyleNode() {
  const style = document.createElement(HTML_STYLE_TAG);
  const htmlStyleAttributes = {
    type: HTML_STYLE_TYPE_ATTRIBUTE,
    id: STYLED_COMPONENT,
  };

  setHTMLAttributes(style, htmlStyleAttributes);
  HTML_HEAD_NODE.appendChild(style);
}

function DOMAttachStyle() {
  console.log("DOMAttachStyle fired");
  const style = document.getElementById(STYLED_COMPONENT);

  const sheet = style.sheet;

  let prevCSSRule = [];

  Object.keys(sheet["cssRules"]).forEach((cssRule) => {
    let cssText = sheet["cssRules"][cssRule]["cssText"];
    prevCSSRule.push(cssText);
  });

  const prevCSSRuleText = prevCSSRule.join(" ");

  const nextCSSRuleText = `${prevCSSRuleText} ${appStylesheets.rulesText}`;

  style.innerText = nextCSSRuleText.trim();
}

export function css(stylesheetRules, componentName = "") {
  let stylesheetsObjectProp = {};

  if (__DEV__) {
    if (componentName === "") {
      warn(
        'css() function: Component name parameter missing. We recommend passing the "component name" as the second parameter of the function css(), It will be added to the CSS class name as a prefix'
      );
    }
  }

  if (typeof stylesheetRules === "function") {
    stylesheetsObjectProp = stylesheetRules();
  }

  if (typeof stylesheetRules === "object") {
    stylesheetsObjectProp = {
      ...stylesheetRules,
    };
  }

  extractCSSClassesName(stylesheetsObjectProp, componentName);

  buildCSSRules(stylesheetsObjectProp, componentName);

  buildStyleSheets();

  if (isNotStyleDOMNodeExist()) {
    DOMCreateStyleNode();
  }

  // **** da modificare vd funzione isObjectStyleExist
  if (isObjectStyleExist()) {
    // se in un component ho 3 classi, 2 esistono e il 3 è nuovo, sa femo con la funzione DOMAttachStyle
    DOMAttachStyle();
  }

  return appStylesheets.objectCSSClassesName;
}

/*
function Styled({
  element = "div",
  id = "",
  belongsTo = "",
  css = {},
  className = "",
  ...otherProps
}) {
  const stylesheetsObjectProp = css;
  const htmlElement = element;
  const htmlNodeId = id;
  const parentComponentRef = belongsTo.toLowerCase();
  const classNameStandardProp = className.split(" ");

  // verificare la presenza del htmlNodeId esporre un warn
  // consigliare la presenza del parentComponentRef

  // cssRules: {
  //   [selectorName]: {
  //     cssText: "",
  //     selectorText: "",
  //     style: "",
  //   },
  // },

  

  function addReactStandardClassNameProp(classNameFromProps) {
    let { standardCSSClassesName } = appStylesheets;

    standardCSSClassesName = [...standardCSSClassesName, ...classNameFromProps];

    appStylesheets = {
      ...appStylesheets,
      standardCSSClassesName,
    };
  }

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
    const { objectCSSClassesName, standardCSSClassesName } = appStylesheets;
    const mergedStylesName = mergeStylesName(
      objectCSSClassesName,
      standardCSSClassesName
    );

    return mergedStylesName.join(" ");
  }

  function isReactStandardClassNameExist() {
    return classNameStandardProp.length > 0 ? true : false;
  }

  const [classesNames, setClassesNamesToComponent] = useState("");

  useEffect(() => {
    if (isReactStandardClassNameExist()) {
      addReactStandardClassNameProp(classNameStandardProp);
    }

    setClassesNamesToComponent(convertClassesNameToText());

    return () => {
      // if (isObjectStyleExist()) {
      //   DOMDetachStyle(parentComponentRef);
      // }
    };
  }, [
    appStylesheets.objectCSSClassesName.length,
    appStylesheets.standardCSSClassesName.length,
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
*/

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
