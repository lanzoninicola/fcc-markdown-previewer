import React from 'react'
import './FormattingToolbarItem.css'


const FormattingToolbarItem = ({ label, icon, eventHandler }) => {

    let showLabel = false;

    return (
        <div className="toolbar-item" onClick={eventHandler}>
            {icon}
            {showLabel && <p className="toolbar-label">{label}</p>}
        </div >
    )
}

export default React.memo(FormattingToolbarItem);