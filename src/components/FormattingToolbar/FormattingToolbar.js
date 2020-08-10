import React from 'react'
import './FormattingToolbar.css'
import FormattingToolbarItems from './FormattingToolbarItems/FormattingToolbarItems'

const FormattingToolbar = ({
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
        <div id="toolbar"
            className={
                `toolbarArea toolbarArea-anchor-top ${focusMode && "toolbarArea-focusMode"} ${showBigToolbarOption && "toolbarArea-anchor-bottom"}`
            }>
            <div id="toolbar" className="toolbar">
                <FormattingToolbarItems
                    editingStatus={editingStatus}
                    focusMode={focusMode}
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

export default React.memo(FormattingToolbar);