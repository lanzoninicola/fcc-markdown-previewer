import React from 'react'
import PropTypes from 'prop-types'
import './ContextMenu.css'

const ContextMenu = ({ menuBgColor, spaceBetween, ...props }) => {

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
    menuBgColor: PropTypes.string,
    spaceBetween: PropTypes.oneOf(['small', 'medium', 'large'])
}

ContextMenu.defaultProps = {
    menuBgColor: "linear-gradient(90deg, rgb(0, 109, 119,0.6) 45%, rgba(1,118,189,0.6) 100%)",
    spaceBetween: 'medium'
}
