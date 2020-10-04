import React from 'react';
import PropTypes from 'prop-types';
import './LabelMenuOption.css';


const LabelMenuOption = ({ label }) => {
    return <p id="label-menu-option">{label}</p>
}


export default LabelMenuOption;

LabelMenuOption.propTypes = {
    label: PropTypes.string,
}

LabelMenuOption.defaultProps = {
    label: 'Template LabelMenuOption'
}
