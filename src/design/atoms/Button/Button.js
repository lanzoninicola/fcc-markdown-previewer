import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClickEventHandler, submit, disabled, ...props }) => {
  return (
    <button
      className={`button`}
      type={submit ? "submit" : ""}
      onClick={() => onClickEventHandler()}
      disabled={disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  onClickEventHandler: PropTypes.func,
  submit: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
