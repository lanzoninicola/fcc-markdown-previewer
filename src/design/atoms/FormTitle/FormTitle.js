import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./FormTitle.css";

const FormTitle = ({ title, subtitle }) => {
  return (
    <Fragment>
      <h3 id="form-title">{title}</h3>
      {subtitle ? <p id="form-subtitle">{subtitle}</p> : null}
    </Fragment>
  );
};

export default FormTitle;

FormTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
