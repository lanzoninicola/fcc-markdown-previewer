import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from './IconCatalog/IconCatalog';

const SvgIcon = ({ bigIcon, name, iconColor }) => {

    let iconFromCatalog = getIcon(name);

    let svgWidth = "15";
    let svgHeight = "15";

    if (bigIcon) {
        svgWidth = "30";
        svgHeight = "30";
    }

    return ((
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            // width={svgWidth} height={svgHeight}
            width="100%" height="100%"
            viewBox="0 0 172 172"
        >
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor}>
                    <path d={iconFromCatalog.svgPathValue}></path>;
                </g>
            </g>
        </svg >
    ))
}

export default React.memo(SvgIcon);

SvgIcon.propTypes = {
    bigIcon: PropTypes.bool,
    name: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
}

SvgIcon.defaultProps = {
    iconColor: "#006d77"
}