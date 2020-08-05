import React, { Fragment } from 'react'
import './EditorArea.css'

const EditorArea = ({ editingStatus, rawText, handleEditorChange, handleTextSelection, textAreaRef }) => {

    const readonly = (editingStatus === 'idle') ? true : false

    return (
        <Fragment>
            <div id="editor-area">
                {/* <div id="line-numbers">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div> */}
                <div id="text-area">
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
                </div>
            </div>
        </Fragment>
    )
}



export default EditorArea;