import React from 'react'
import './EditorArea.css'

const EditorArea = ({ editingStatus, rawText, handleEditorChange, handleTextSelection, textAreaRef }) => {

    const readonly = (editingStatus === 'idle') ? true : false

    return (
        <textarea
            id="editor"
            ref={textAreaRef}
            onChange={handleEditorChange}
            onClick={handleTextSelection}
            onSelect={handleTextSelection}
            value={rawText}
            readOnly={readonly}
            placeholder="Start here...">
        </textarea>
    )
}



export default EditorArea;