import React, { Component } from 'react'
import './EditorPanel.css'
import EditorArea from './EditorArea/EditorArea'


class EditorPanel extends Component {
    render() {
        const {
            editingStatus,
            markupText,
            lastMarkupVersion,
            versionSelectedFromHistory,
            markupVersionsHistory,
            handleEditorChange,
            handleTextSelection,
            handleMarkupVersionChange
        } = this.props;

        const mkVersionsOptions = markupVersionsHistory.sort((a, b) => b - a).map((mkVersion, i) => {
            return <option key={i}>{`Version ${mkVersion}`}</option>
        })

        return (
            <div id="editorSection">
                <div id="editorSection-header">
                    <h3 id="editorSection-header-title">EDITOR</h3>
                    {markupVersionsHistory.length > 0 && editingStatus === 'InProgress' ?
                        <div id="editorSection-header-select">
                            <label htmlFor="markup-version" id="editorSection-header-select-label">Markup version:</label>
                            <select value={`Version ${(versionSelectedFromHistory >= 0) ? versionSelectedFromHistory : lastMarkupVersion}`} onChange={handleMarkupVersionChange}>
                                {mkVersionsOptions}
                            </select>
                        </div>
                        : null}
                </div >
                <EditorArea
                    editingStatus={editingStatus}
                    rawText={markupText}
                    handleEditorChange={handleEditorChange}
                    handleTextSelection={handleTextSelection}
                />

            </div >
        )
    }
}



export default EditorPanel;


// let text = 'Nicola abita a Valeggio con Mara';

// let textSelected = 'Valeggio con';

// let startSelection = text.search(textSelected);
// //startSelection
// let endSelection = startSelection + textSelected.length +1;

// //endSelection

// let textToArray = [];
// textToArray.push(...text.split(""))

// textToArray.splice(startSelection, 0, "***")

// textToArray.splice(endSelection, 0, "***")

// textToArray.join("")

