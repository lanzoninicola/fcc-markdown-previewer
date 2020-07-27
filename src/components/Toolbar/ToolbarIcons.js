import React from 'react'

export const SvgNewIcon = ({ screenWidth }) => {

    let svgWidth = "30"
    let svgHeight = "30";

    if (screenWidth <= 450) {
        svgWidth = "150";
        svgHeight = "150";
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={svgWidth} height={svgHeight}
            viewBox="0 0 172 172"
            style={{ fill: '#000000' }}>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                    <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333zM78.83333,50.16667v28.66667h-28.66667v14.33333h28.66667v28.66667h14.33333v-28.66667h28.66667v-14.33333h-28.66667v-28.66667z"></path>
                </g>
            </g>
        </svg>
    )
}

export const SvgSnapshotIcon = ({ screenWidth }) => {

    let svgWidth = "30"
    let svgHeight = "30";

    if (screenWidth <= 450) {
        svgWidth = "15";
        svgHeight = "15";
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={svgWidth} height={svgHeight}
            viewBox="0 0 172 172"
            style={{ fill: '#000000' }}>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                    <path d="M107.486,14.31934l-43,0.04199l-13.14355,14.30534h-22.67578c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v86c0,7.88333 6.45,14.33333 14.33333,14.33333h114.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-86c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333h-22.61979zM101.20117,28.65267l13.22754,14.34733h28.90462v86h-114.66667v-86h28.97461l13.15755,-14.31934zM86,50.16667c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333c0,19.78717 16.04617,35.83333 35.83333,35.83333c19.78717,0 35.83333,-16.04617 35.83333,-35.83333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM86,64.5c11.87517,0 21.5,9.62483 21.5,21.5c0,11.87517 -9.62483,21.5 -21.5,21.5c-11.87517,0 -21.5,-9.62483 -21.5,-21.5c0,-11.87517 9.62483,-21.5 21.5,-21.5z"></path>
                </g>
            </g>
        </svg>
    )
}


export const SvgClearIcon = ({ screenWidth }) => {

    let svgWidth = "30"
    let svgHeight = "30";

    if (screenWidth <= 450) {
        svgWidth = "15";
        svgHeight = "15";
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={svgWidth} height={svgHeight}
            viewBox="0 0 172 172"
            style={{ fill: '#000000' }}>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                    <path d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h7.16667v107.5c0,3.74259 1.37119,7.55804 4.07324,10.26009c2.70205,2.70205 6.5175,4.07324 10.26009,4.07324h71.66667c3.74259,0 7.55804,-1.37119 10.26009,-4.07324c2.70205,-2.70206 4.07324,-6.5175 4.07324,-10.26009v-107.5h7.16667v-14.33333h-35.83333l-7.16667,-7.16667zM50.16667,35.83333h71.66667v107.5h-71.66667zM64.5,50.16667v78.83333h14.33333v-78.83333zM93.16667,50.16667v78.83333h14.33333v-78.83333z"></path>
                </g>
            </g>
        </svg>
    )
}
