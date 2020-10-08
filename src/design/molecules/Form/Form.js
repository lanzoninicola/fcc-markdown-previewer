import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ ...props }) => {
  return (
    <div className="form-container">
      <div className="form-window">
        <div className="form-content">
          {props.children}
          {/* <div id="form-buttons">{props.children}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
