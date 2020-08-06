import React from 'react'
import PropTypes from 'prop-types'
import './ContextMenu.css'

const ContextMenu = ({ menuBgColor, ...props }) => {

    return (
        <div id="context-menu" style={{ background: menuBgColor }}>
            {props.children}
        </div>
    )
}

export default ContextMenu;

ContextMenu.propTypes = {
    menuBgColor: PropTypes.string
}

ContextMenu.defaultProps = {
    menuBgColor: "linear-gradient(90deg, rgba(0, 109, 119,1) 45%, rgba(1,118,189,1) 100%)"
}
