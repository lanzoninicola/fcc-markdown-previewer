import React from 'react'
import './EditorToolbar.css'


const EditorToolbar = ({ handleNewMarkupContent, handleAddMarkupContentToHistory, handleClearMarkupContent }) => {
    return (

        <div id="toolbar">
            <div className="toolbar-item" onClick={handleNewMarkupContent}>
                <img className="toolbar-icon"
                    src="https://img.icons8.com/material-outlined/25/000000/plus.png"
                    alt='new markup content'
                />
                <p className="toolbar-label">New</p>
            </div>
            <div className="toolbar-item" onClick={handleAddMarkupContentToHistory}>
                <img className="toolbar-icon"
                    src="https://img.icons8.com/material-outlined/25/000000/camera--v2.png"
                    alt='take snap of markup content'
                />
                <p className="toolbar-label">Snapshot</p>
            </div>
            <div className="toolbar-item" onClick={handleClearMarkupContent} >
                <img className="toolbar-icon"
                    src="https://img.icons8.com/material-outlined/25/000000/filled-trash.png"
                    alt='remove markup content'
                />
                <p className="toolbar-label">Clear</p>
            </div>
        </div>

    )
}

export default EditorToolbar;