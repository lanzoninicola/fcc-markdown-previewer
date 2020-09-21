import React from "react";
import PropTypes from "prop-types";
import "./ButtonSecondary.css";
import Button from "../Button/index";

import appTheme from "../../UI/index";

const ButtonSecondary = ({ ...props }) => {
  // const themeStyle = appTheme()
  //   .component("button")
  //   .color("secondary")
  //   .colorSelectors();

  // console.log(
  //   "buttonSecondary.js - this.themePaletteGlobal",
  //   this.themePaletteGlobal
  // );

  return (
    <Button
      {...props}
      // style={{
      //   ...themeStyle,
      // }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonSecondary;

ButtonSecondary.propTypes = {
  type: PropTypes.string,
  onClickEventHandler: PropTypes.func,
  submit: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonSecondary.defaultProps = {
  disabled: false,
};
