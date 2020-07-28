import React from 'react'
import './EditorArea.css'

const EditorArea = ({ editingStatus, rawText, handleEditorChange, handleTextSelection, refsTextArea }) => {

    const readonly = (editingStatus === 'idle') ? true : false

    return (
        <textarea
            id="editor"
            ref={refsTextArea}
            onChange={handleEditorChange}
            onClick={handleTextSelection}
            onSelect={handleTextSelection}
            value={rawText}
            readOnly={readonly}>
        </textarea>
    )
}



export default EditorArea;