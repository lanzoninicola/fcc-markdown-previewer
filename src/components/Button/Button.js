import React from "react";
import "./Button.css";

const Button = ({ ...props }) => {
  const { type, eventHandler, submit, disabled } = props;

  return (
    <button
      className={`button button-${type}`}
      type={submit ? "submit" : ""}
      onClick={() => eventHandler()}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
