import React, { Fragment } from "react";
import "./Form.css";

const Form = ({ title, message, inputs, children }) => {
  let inputForm;

  if (inputs) {
    inputForm = inputs.map((input, index) => {
      return (
        <Fragment key={`input_${index}`}>
          <label htmlFor={index}>{input.label}</label>
          <input
            id={index}
            type="text"
            value={input.value}
            placeholder={input.placeholder}
            onChange={input.onChangeEventHandler}
            required={input.required}
          />
        </Fragment>
      );
    });
  }

  return (
    <div className="form-container">
      <div className="form-window">
        <div className="form-content">
          <h3 id="form-title">{title}</h3>
          {message ? <p id="form-message">{message}</p> : null}
          <div id="form-inputs">{inputs ? inputForm : null}</div>
          <div id="form-buttons">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
