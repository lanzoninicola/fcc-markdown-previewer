import React, { Fragment } from 'react';
import './EditorArea.css';

import { connect } from 'react-redux';
import { handleEditorChange, handleTextSelection } from '../../../redux/actionsCreators/globalActions';

const EditorArea = ({
    //editingStatus,
    //rawText,
    //handleEditorChange,
    //handleTextSelection,
    // textAreaRef,
    ...props }) => {

    const {
        handleEditorChange,
        handleTextSelection,
        editingStatus,
        markdownText,
        textAreaRef2
    } = props;

    //  const readonly = (editingStatus === 'idle') ? true : false // da riabilitare

    console.log(editingStatus)

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
                        ref={textAreaRef2}
                        onChange={handleEditorChange}
                        onClick={handleTextSelection}
                        onSelect={handleTextSelection}
                        value={markdownText}
                        // readOnly={readonly} // da riabilitare
                        placeholder="Start here...">
                    </textarea>
                </div>
            </div>
        </Fragment>
    )
}

const madDispatch = dispatch => {
    return {
        handleEditorChange: (e) => dispatch(handleEditorChange(e)),
        // handleTextSelection: (textAreaRef) => dispatch(handleTextSelection(textAreaRef))
    }

}

const mapState = state => {
    const { editingStatus, markdownText } = state.changeMarkdownText;
    const { textAreaRef2 } = state.initTextAreaRef;
    // const { } = state.init

    console.log('editorArea', 'mapState', state)

    return {
        editingStatus,
        markdownText,
        textAreaRef2
    }
}



export default connect(mapState, madDispatch)(EditorArea);