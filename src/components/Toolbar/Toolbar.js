import React from 'react'
import './Toolbar.css'
import ToolbarItems from '../ToolbarItems/ToolbarItems'

const Toolbar = ({
    screenWidth,
    focusMode,
    showBigToolbar,
    editingStatus,
    handleNewmarkdownContent,
    handleAddmarkdownContentToHistory,
    handleClearmarkdownContent,
    handleTextFormatting,
    handleInsertImage
}) => {

    let showBigToolbarOption = showBigToolbar;

    if (screenWidth < 1366) {
        showBigToolbarOption = false;
    }

    return (
        <div id="toolbarArea" className={
            `${focusMode ? "toolbarArea-focusMode" : ""} ${showBigToolbarOption ? "toolbarArea-bottom" : "toolbarArea-top"}`
        }>
            <div id="toolbar" className={`toolbar ${focusMode ? "toolbar-focusMode" : "toolbar-defaultMode"}`}>
                <ToolbarItems
                    editingStatus={editingStatus}
                    showBigToolbarOption={showBigToolbarOption}
                    handleNewmarkdownContent={handleNewmarkdownContent}
                    handleAddmarkdownContentToHistory={handleAddmarkdownContentToHistory}
                    handleClearmarkdownContent={handleClearmarkdownContent}
                    handleTextFormatting={handleTextFormatting}
                    handleInsertImage={handleInsertImage}
                />
            </div>
        </div >
    )
}

export default Toolbar;