import React from 'react'
import './Toolbar.css'
import ToolbarItems from '../ToolbarItems/ToolbarItems'

const Toolbar = ({
    screenWidth,
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
        <div className={showBigToolbarOption ? "toolbarArea-bottom" : "toolbarArea-top"}>
            <div id="toolbar">
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

// `toolbarArea-${toolbarPositionStyle}`