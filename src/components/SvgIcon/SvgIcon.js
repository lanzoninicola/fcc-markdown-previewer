import React from 'react'
import { getIcon } from './IconCatalog/IconCatalog'

const SvgIcon = ({ bigIcon, name, color }) => {

    let iconFromCatalog = getIcon(name);

    let svgWidth = "15";
    let svgHeight = "15";

    if (bigIcon) {
        svgWidth = "30";
        svgHeight = "30";
    }

    let svgStyle = { fill: color };

    return ((
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={svgWidth} height={svgHeight}
            viewBox="0 0 172 172"
            style={svgStyle}>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={svgStyle.fill}>
                    <path d={iconFromCatalog.svgPathValue}></path>;
                </g>
            </g>
        </svg>
    ))
}

export default SvgIcon;