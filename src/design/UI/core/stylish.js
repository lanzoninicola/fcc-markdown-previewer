import React, { useEffect, useState } from "react";
import appTheme from "../index";
import hyphenateStyleName from "../utils/hyphenateStyleName";
import isNotValidHTMLTag from "../utils/isNotValidHTMLTag";
import setHTMLAttributes from "../utils/setHTMLAttributes";
import {warn} from "../utils/errors";
import {__DEV__} from '../utils/environments'
import {isPseudoclass, getPseudoclass, pseudoClasses} from "./pseudoClasses"

const HTML_HEAD_TAG = "head";
const HTML_STYLE_TAG = "style";
const HTML_STYLE_TYPE_ATTRIBUTE = "text/css";

const HTML_HEAD_NODE =
  document.head || document.getElementsByTagName(HTML_HEAD_TAG)[0];
const STYLED_COMPONENT = "styledcomponent";

// what if the user/dev selects a different theme
// It could be more effective a class object with separate instances
export let appStylesheets = {
  // htmlNodeId,
  // parentComponentRef: "",

  //* Components CSS objects *** split globals cssClassNamesObject and component cssClassNamesObject
  objectCSSClassesName: [],

  //* Components CSS from classname prop
  // CSS selector could be for: element, id, class
  componentClassesNameProp: [],

  cssRules: {},

  stylesheets: {
    /*
    [stylesheetName] = checksum(rule) 
  */
  },
};

// const addComponentIdentifierToCSSClass = appStylesheets.parentComponentRef !== "";


function isPrivateKey(key){
  return key.charAt(0) === "_";
}

function isPseudoclass(key){
  return rule.charAt(0) === "_";
})

function handleStylesheetList(stylesheetsObject = {}, componentName = "") {

  let stylesheetList = [];

  for (let stylesheet in stylesheetsObject) {
    stylesheetList.push(stylesheet)
    for (let rule in stylesheetsObject[stylesheet]) {

      if (isPrivateKey(rule)) {
        stylesheetList.push(`${stylesheet}${rule}`)
      }
    }
  }

  console.log(stylesheetList)

  /*
 
  Object.keys(stylesheetsObject).forEach((stylesheet) => {
    
    const selectorName = buildStylesheetName(stylesheet, componentName);
    
    const stylesheetProp = {
      name: stylesheet,
      nameText: selectorName,
      rules: stylesheetsObject[stylesheet],
      componentName,
    };

    const stylesheetRules = handleStylesheetRuleList(stylesheetProp);

    stylesheetsRules = {...stylesheetsRules, ...stylesheetRules}
  });

  */
}

function buidStylesheetSignature(stylesheetNameText = "", stylesheetText = "") {
  //** TODO: convert stylesheetText in CHECKSUM value

  let { stylesheets } = appStylesheets;

  appStylesheets = {
    ...appStylesheets,
    stylesheets: {
      ...stylesheets,
      [stylesheetNameText]: stylesheetText,
    },
  };
}

function combineStylesText() {
  const { cssRules } = appStylesheets;

  let rulesPlainText = "";

  Object.keys(cssRules).forEach((stylesheet) => {
    let stylesheetNameText = cssRules[stylesheet]["stylesheetNameText"];
    let stylesheetRulesText = cssRules[stylesheet]["stylesheetRulesText"];

    let text = `.${stylesheetNameText} {${stylesheetRulesText}} `;
    rulesPlainText += text;

    buidStylesheetSignature(stylesheetNameText, stylesheetRulesText);
  });

  appStylesheets = {
    ...appStylesheets,
    rulesPlainText: rulesPlainText.trim(),
  };

  console.log(appStylesheets);
}

function buildCSSClassesName(stylesheetsObject = {}, componentName = "") {
  const { objectCSSClassesName } = appStylesheets;

  // console.log("buildCSSClassesName fired", stylesheetsObject);
  Object.keys(stylesheetsObject).forEach((stylesheet) => {
    let CSSClassName = "";

    if (componentName !== "") {
      CSSClassName += `${componentName}__${stylesheet}`;
    } else {
      CSSClassName = `${stylesheet}`;
    }

    if (!objectCSSClassesName.includes(CSSClassName))
      objectCSSClassesName.push(CSSClassName);
  });
}

function isNotStyleDOMNodeExist() {
  const style = document.getElementById(STYLED_COMPONENT);

  return !style ? true : false;
}

// qui devo verificare negli stylesheets globali
// function isObjectStyleExist() {
//   return appStylesheets.objectCSSClassesName.length > 0 ? true : false;
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

function DOMAttachStyle() {
  console.time("DOMAttachStyle");
  const style = document.getElementById(STYLED_COMPONENT);

  const sheet = style.sheet;

  // let prevCSSRule = [];

  // Object.keys(sheet["cssRules"]).forEach((cssRule) => {
  //   let cssText = sheet["cssRules"][cssRule]["cssText"];
  //   prevCSSRule.push(cssText);
  // });

  // const prevCSSRuleText = prevCSSRule.join(" ");

  // const nextCSSRuleText = `${prevCSSRuleText} ${appStylesheets.rulesPlainText}`;

  const nextCSSRuleText = `${appStylesheets.rulesPlainText}`;

  style.innerText = nextCSSRuleText.trim();
  console.timeEnd("DOMAttachStyle");
}

export function css(stylesheetRules, componentName = "") {
  let stylesheetsObjectProp = {};

  if (__DEV__) {
    if (componentName === "") {
      warn(
        '"componentName" parameter missing. Css() function should have the "component name" as the second parameter. It is required if you want to avoid CSS classname collision.'
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

  // buildCSSClassesName(stylesheetsObjectProp, componentName);

  handleStylesheetList(stylesheetsObjectProp, componentName);

  // combineStylesText();

  // if (isNotStyleDOMNodeExist()) {
  //   DOMCreateStyleNode();
  // }

  // // **** da modificare vd funzione isObjectStyleExist
  // // if (isObjectStyleExist()) {
  // // se in un component ho 3 classi, 2 esistono e il 3 è nuovo, sa femo con la funzione DOMAttachStyle
  // DOMAttachStyle();
  // // }

  // return appStylesheets.objectCSSClassesName;
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
  //     stylesheetNameText: "",
  //     style: "",
  //   },
  // },

  

  function addReactStandardClassNameProp(classNameFromProps) {
    let { componentClassesNameProp } = appStylesheets;

    componentClassesNameProp = [...componentClassesNameProp, ...classNameFromProps];

    appStylesheets = {
      ...appStylesheets,
      componentClassesNameProp,
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
    const { objectCSSClassesName, componentClassesNameProp } = appStylesheets;
    const mergedStylesName = mergeStylesName(
      objectCSSClassesName,
      componentClassesNameProp
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
    appStylesheets.componentClassesNameProp.length,
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
