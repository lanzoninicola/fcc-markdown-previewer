import React, { Component } from 'react'
import './Editor.css'
import EditorArea from './EditorArea/EditorArea'


class EditorPanel extends Component {
    render() {

        const { markupText, handleEditorChange, markupVersionsHistory } = this.props;

        const mkVersionsOptions = markupVersionsHistory.sort((a, b) => b - a).map((mkVersion, i) => {
            return <option key={i}>{`Version ${mkVersion}`}</option>
        })

        console.log(mkVersionsOptions)

        return (
            <div id="editorSection">
                <div id="editorSection-toolbar">
                    <h3 id="editorSection-toolbar-title">MARKUP</h3>
                    {markupVersionsHistory.length > 0 ?
                        <div id="editorSection-toolbar-select">
                            <label htmlFor="markup-version" id="editorSection-toolbar-select-label">Markup version:</label>
                            <select >
                                {mkVersionsOptions}
                            </select>
                        </div>
                        : null}
                </div>
                <EditorArea
                    rawText={markupText}
                    handleEditorChange={handleEditorChange}
                />
            </div >
        )
    }
}



export default EditorPanel;