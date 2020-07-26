import React, { Component } from 'react'
import './EditorPanel.css'
import EditorArea from './EditorArea/EditorArea'
import Toolbar from '../../components/Toolbar/Toolbar'

class EditorPanel extends Component {


    render() {

        const {
            status,
            markupText,
            handleEditorChange,
            lastMarkupVersion,
            versionSelectedFromHistory,
            markupVersionsHistory,
            handleNewMarkupContent,
            handleAddMarkupContentToHistory,
            handleClearMarkupContent,
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
                <Toolbar
                    status={status}
                    handleNewMarkupContent={handleNewMarkupContent}
                    handleAddMarkupContentToHistory={handleAddMarkupContentToHistory}
                    handleClearMarkupContent={handleClearMarkupContent}
                />
                <EditorArea
                    rawText={markupText}
                    handleEditorChange={handleEditorChange}
                />

            </div >
        )
    }
}



export default EditorPanel;