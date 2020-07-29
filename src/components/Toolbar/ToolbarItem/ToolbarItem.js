import React from 'react'
import './ToolbarItem.css'


const ToolbarItem = ({ label, icon, eventHandler, screenWidth }) => {

    let toolbarLabel = (screenWidth > 1366) ? <p className="toolbar-label">{label}</p> : null;

    return (
        <div className="toolbar-item" onClick={eventHandler}>
            {icon}
            {toolbarLabel}
        </div >
    )
}

export default ToolbarItem;