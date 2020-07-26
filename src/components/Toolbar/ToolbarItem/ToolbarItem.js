import React from 'react'
import './ToolbarItem.css'


const ToolbarItem = ({ label, icon, alt, eventHandler }) => {
    return (
        <div className="toolbar-item" onClick={eventHandler}>
            <img className="toolbar-icon" src={icon} alt={alt} />
            <p className="toolbar-label">{label}</p>
        </div>
    )
}

export default ToolbarItem;