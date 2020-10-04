import React from "react";
import PropTypes from "prop-types";
import "./ButtonPrimary.css";
import Button from "../Button/index";

const ButtonPrimary = ({ ...props }) => {
  return (
    <Button {...props} className={"button-primary"}>
      {props.children}
    </Button>
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
