import React, { Component } from 'react'
import './EditorPanel.css'
import EditorArea from './EditorArea/EditorArea'
import EditorPanelSettings from '../../components/EditorPanelSettings/EditorPanelSettings'


class EditorPanel extends Component {
    render() {
        const {
            editingStatus,
            markdownText,
            focusMode,
            lastmarkdownVersion,
            versionSelectedFromHistory,
            markdownVersionsHistory,
            handleEditorChange,
            handleTextSelection,
            handlemarkdownVersionChange,
            textAreaRef,
            handleFocusMode,
            handleImmersiveWriting,
            // handleHideGridNumbers
        } = this.props;

        const mkVersionsOptions = markdownVersionsHistory.sort((a, b) => b - a).map((mkVersion, i) => {
            return <option key={i}>{`Version ${mkVersion}`}</option>
        })

        const menuItems = [
            {
                component: 'EditorPanel',
                settingName: 'focusMode',
                label: 'FOCUS MODE',
                eventHandler: handleFocusMode,
                disabled: false,
                visible: true
            },
            {
                component: 'EditorPanel',
                settingName: 'immersiveWriting',
                label: 'IMMERSIVE WRITING',
                eventHandler: handleImmersiveWriting,
                disabled: false,
                visible: focusMode ? true : false
            }
            // ,
            // {
            //     component: 'EditorPanel',
            //     name: 'hideNumbers',
            //     label: 'HIDE NUMBERS',
            //     eventHandler: handleHideGridNumbers
            // },
        ]

        return (
            <div id="editor-panel" className="fadeInLeft">
                <div id="editor-panel-header">
                    <h3 id="editor-panel-header-title">EDITOR</h3>
                    <div className="editor-panel-header-toolbar">
                        {/* {markdownVersionsHistory.length > 0 && editingStatus === 'InProgress' ?
                            <div className="editor-panel-header-toolbar-item">
                                <label htmlFor="markdown-version" id="editor-panel-header-toolbar-item-label">Markdown version:</label>
                                <select value={`Version ${(versionSelectedFromHistory >= 0) ? versionSelectedFromHistory : lastmarkdownVersion}`} onChange={handlemarkdownVersionChange}>
                                    {mkVersionsOptions}
                                </select>
                            </div>
                            : null} */}

                        <div className="editor-panel-header-toolbar-item" >
                            <EditorPanelSettings
                                menuItems={menuItems} />
                        </div>
                    </div>
                </div >
                <EditorArea
                    editingStatus={editingStatus}
                    rawText={markdownText}
                    handleEditorChange={handleEditorChange}
                    handleTextSelection={handleTextSelection}
                    textAreaRef={textAreaRef}
                />

            </div >
        )
    }
}

export default EditorPanel;