import React from "react";
import "./FormattingToolbar.css";
import FormattingToolbarItemList from "../FormattingToolbarItemList/index";

const FormattingToolbar = ({
  screenWidth,
  focusMode,
  handleNewmarkdownContent,
  handleAddmarkdownContentToHistory,
  handleClearmarkdownContent,
  handleTextFormatting,
  handleInsertImage,
}) => {
  return (
    <div
      id="toolbarArea"
      className={`toolbarArea ${focusMode && "toolbarArea-focusMode"}`}
    >
      <div id="toolbar" className="toolbar">
        <FormattingToolbarItemList
          focusMode={focusMode}
          handleNewmarkdownContent={handleNewmarkdownContent}
          handleAddmarkdownContentToHistory={handleAddmarkdownContentToHistory}
          handleClearmarkdownContent={handleClearmarkdownContent}
          handleTextFormatting={handleTextFormatting}
          handleInsertImage={handleInsertImage}
        />
      </div>
    </div>
  );
};

export default React.memo(FormattingToolbar);
