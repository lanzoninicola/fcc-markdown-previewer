import React, { Component } from "react";
import "./EditorPanelHeader.css";
import EditorPanelSettings from "../../components/EditorPanelSettings/EditorPanelSettings";

class EditorPanelHeader extends Component {
  render() {
    const {
      editingStatus,
      screenWidth,
      focusMode,
      lastmarkdownVersion,
      versionSelectedFromHistory,
      markdownVersionsHistory,
      handlemarkdownVersionChange,
    } = this.props;

    // const mkVersionsOptions = markdownVersionsHistory
    //   .sort((a, b) => b - a)
    //   .map((mkVersion, i) => {
    //     return <option key={i}>{`Version ${mkVersion}`}</option>;
    //   });

    return (
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

          <div className="editor-panel-header-toolbar-item">
            <EditorPanelSettings module={"editorPanel"} />
          </div>
        </div>
      </div>
    );
  }
}

export default EditorPanelHeader;
