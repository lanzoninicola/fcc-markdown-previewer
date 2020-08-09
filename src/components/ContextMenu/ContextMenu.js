import React from 'react'
import PropTypes from 'prop-types'
import './ContextMenu.css'

const ContextMenu = ({ config, ...props }) => {

    let spaceBetween = (config.spaceBetween) ? config.spaceBetween : ContextMenu.defaultProps.config.spaceBetween;
    let menuBgColor = (config.menuBgColor) ? config.menuBgColor : ContextMenu.defaultProps.config.menuBgColor;

    let topStyle;

    switch (spaceBetween) {
        case 'small':
            topStyle = "15px"
            break;
        case 'medium':
            topStyle = "35px"
            break;
        case 'large':
            topStyle = "50px"
            break;
        default:
            topStyle = "35px"
            break;
    }

    return (
        <div id="context-menu"
            style={{
                background: menuBgColor,
                top: topStyle
            }}>
            {props.children}
        </div>
    )
}

export default ContextMenu;

ContextMenu.propTypes = {
    config: PropTypes.shape({
        spaceBetween: PropTypes.string,
        menuBgColor: PropTypes.string,
    })

}

ContextMenu.defaultProps = {
    config: {
        menuBgColor: "linear-gradient(90deg, rgb(0, 109, 119,0.6) 45%, rgba(1,118,189,0.6) 100%)",
        spaceBetween: 'medium'
    }
}
