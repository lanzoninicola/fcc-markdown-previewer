import React from "react";
import PropTypes from "prop-types";
import "./ButtonPrimary.css";
import Button from "../Button/index";

import appTheme from "../../UI/index";

const ButtonPrimary = ({ ...props }) => {
  // const themeStyle = appTheme().component("button");

  // const componentStyle = props.disabled
  //   ? themeStyle.color("disabled").colorSelectors()
  //   : themeStyle.color("primary").colorSelectors();

  // console.log("buttonPrimary.js - this", this);

  // console.log(
  //   "buttonPrimary.js - this.themePaletteGlobal",
  //   this.themePaletteGlobal
  // );

  const themeStyle = appTheme
    .component("button")
    .color("primary")
    .colorSelectors();

  //const themeStyle = appTheme().color().color().color();
  console.log(themeStyle);

  return (
    <div>Hello workd</div>
    // <Button
    //   {...props}
    //   style={{
    //     ...themeStyle,

    //   }}
    // >
    //   {props.children}
    // </Button>
  );
};

export default ButtonPrimary;

ButtonPrimary.propTypes = {
  type: PropTypes.string,
  onClickEventHandler: PropTypes.func,
  submit: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  disabled: false,
};
