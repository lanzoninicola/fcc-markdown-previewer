import React from 'react'
import './EditorArea.css'

const EditorArea = ({ rawText, handleEditorChange }) => {
    return (
        <textarea id="editor" onChange={handleEditorChange} value={rawText}></textarea>
    )
}



export default EditorArea;