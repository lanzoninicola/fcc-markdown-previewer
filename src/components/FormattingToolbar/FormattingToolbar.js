import React from 'react'
import './FormattingToolbar.css'
import FormattingToolbarItems from './FormattingToolbarItems/FormattingToolbarItems'

const FormattingToolbar = ({
    screenWidth,
    focusMode,

    editingStatus,
    handleNewmarkdownContent,
    handleAddmarkdownContentToHistory,
    handleClearmarkdownContent,
    handleTextFormatting,
    handleInsertImage
}) => {

    return (
        <div id="toolbarArea"
            className={
                `toolbarArea ${focusMode && "toolbarArea-focusMode"}`
            }>
            <div id="toolbar" className="toolbar">
                <FormattingToolbarItems
                    editingStatus={editingStatus}
                    focusMode={focusMode}
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