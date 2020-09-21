import React from 'react';
import PropTypes from 'prop-types';
import './ContextMenu.css';

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
        <div id="context-menu" className={'fadeInDown'}
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
        menuBgColor: "linear-gradient(90deg,  rgb(0,0,0, 0.5) 2%, rgba(0,0,0,0.7) 98%)",
        spaceBetween: 'medium'
    }
}
