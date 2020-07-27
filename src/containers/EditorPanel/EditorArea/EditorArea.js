import React from 'react'
import './EditorArea.css'

const EditorArea = ({ editingStatus, rawText, handleEditorChange, handleTextSelection }) => {

    const readonly = (editingStatus === 'idle') ? true : false

    return (
        <textarea id="editor" onChange={handleEditorChange} onSelect={handleTextSelection} value={rawText} readOnly={readonly}></textarea>
    )
}



export default EditorArea;