import React, { Component } from 'react'
import './Editor.css'
import EditorArea from './EditorArea/EditorArea'
import EditorToolbar from '../../components/EditorToolbar/EditorToolbar'

class EditorPanel extends Component {


    render() {

        const {
            markupText,
            handleEditorChange,
            lastMarkupVersion,
            versionSelectedFromHistory,
            markupVersionsHistory,
            handleNewMarkupContent,
            handleNewMarkupVersionHistory,
            handleClearMarkupContent,
            handleMarkupVersionChange
        } = this.props;

        const mkVersionsOptions = markupVersionsHistory.sort((a, b) => b - a).map((mkVersion, i) => {
            return <option key={i}>{`Version ${mkVersion}`}</option>
        })

        return (
            <div id="editorSection">
                <div id="editorSection-header">
                    <h3 id="editorSection-header-title">MARKUP</h3>
                    {markupVersionsHistory.length > 0 ?
                        <div id="editorSection-header-select">
                            <label htmlFor="markup-version" id="editorSection-header-select-label">Markup version:</label>
                            <select value={`Version ${(versionSelectedFromHistory > 0) ? versionSelectedFromHistory : lastMarkupVersion}`} onChange={handleMarkupVersionChange}>
                                {mkVersionsOptions}
                            </select>
                        </div>
                        : null}
                </div >
                <div id="editorSection-toolbarArea">
                    <EditorToolbar
                        handleNewMarkupContent={handleNewMarkupContent}
                        handleNewMarkupVersionHistory={handleNewMarkupVersionHistory}
                        handleClearMarkupContent={handleClearMarkupContent}
                    />
                </div>
                <EditorArea
                    rawText={markupText}
                    handleEditorChange={handleEditorChange}
                />

            </div>
        )
    }
}



export default EditorPanel;