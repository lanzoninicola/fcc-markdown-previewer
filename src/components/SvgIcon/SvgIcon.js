import React from 'react'

const SvgIcon = ({ width, height, style, path }) => {

    return ((
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={width} height={height}
            viewBox="0 0 172 172"
            style={style}>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={style.fill}>
                    <path d={path}></path>;
                </g>
            </g>
        </svg>
    ))
}

export default SvgIcon;