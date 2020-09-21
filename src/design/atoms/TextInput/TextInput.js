import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({ input }) => {
  return (
    <div id="text-input">
      <Fragment key={`input_${input.index}`}>
        <label htmlFor={input.index}>{input.label}</label>
        <input
          id={input.index ? input.index : 1}
          type="text"
          value={input.value}
          placeholder={input.placeholder}
          onChange={input.onChangeEventHandler}
          required={input.required}
        />
      </Fragment>
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  input: PropTypes.object,
  input: PropTypes.shape({
    index: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeEventHandler: PropTypes.func,
    required: PropTypes.bool,
  }),
};

TextInput.defaultProps = {
  input: {
    required: true,
  },
};
