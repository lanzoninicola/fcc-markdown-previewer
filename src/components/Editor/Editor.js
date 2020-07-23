import React from 'react'
import './Editor.css'

const Editor = ({ rawText, handleEditorChange }) => {
    return (
        <div id="editorSection">
            <h3>MARKUP</h3>
            <textarea id="editor" onChange={handleEditorChange} value={rawText}></textarea>
        </div>
    )
}



export default Editor;