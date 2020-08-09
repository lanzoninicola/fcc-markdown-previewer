import React from 'react'
import './ToolbarItem.css'


const ToolbarItem = ({ label, icon, eventHandler, showBigToolbarOption }) => {

    let showLabel = false;
    showBigToolbarOption ? showLabel = true : showLabel = false;

    return (
        <div className="toolbar-item" onClick={eventHandler}>
            {icon}
            {showLabel && <p className="toolbar-label">{label}</p>}
        </div >
    )
}

export default React.memo(ToolbarItem);