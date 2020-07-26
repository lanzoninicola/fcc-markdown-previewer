import React, { Component } from 'react'
import './EditorPanel.css'
import EditorArea from './EditorArea/EditorArea'


class EditorPanel extends Component {


    render() {

        const {
            markupText,
            handleEditorChange,
            lastMarkupVersion,
            versionSelectedFromHistory,
            markupVersionsHistory,
            handleMarkupVersionChange
        } = this.props;

        const mkVersionsOptions = markupVersionsHistory.sort((a, b) => b - a).map((mkVersion, i) => {
            return <option key={i}>{`Version ${mkVersion}`}</option>
        })

        return (
            <div id="editorSection">
                <div id="editorSection-header">
                    <h3 id="editorSection-header-title">EDITOR</h3>
                    {markupVersionsHistory.length > 0 ?
                        <div id="editorSection-header-select">
                            <label htmlFor="markup-version" id="editorSection-header-select-label">Markup version:</label>
                            <select value={`Version ${(versionSelectedFromHistory >= 0) ? versionSelectedFromHistory : lastMarkupVersion}`} onChange={handleMarkupVersionChange}>
                                {mkVersionsOptions}
                            </select>
                        </div>
                        : null}
                </div >


                <EditorArea
                    rawText={markupText}
                    handleEditorChange={handleEditorChange}
                />

            </div >
        )
    }
}



export default EditorPanel;