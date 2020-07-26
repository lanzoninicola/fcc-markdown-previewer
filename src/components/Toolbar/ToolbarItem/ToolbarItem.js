import React from 'react'
import './ToolbarItem.css'


const ToolbarItem = ({ label, icon, eventHandler }) => {
    return (
        <div className="toolbar-item" onClick={eventHandler}>
            {icon}
            <p className="toolbar-label">{label}</p>
        </div >
    )
}

export default ToolbarItem;