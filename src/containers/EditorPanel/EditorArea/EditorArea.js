import React, { Component, Fragment, forwardRef } from "react";
import "./EditorArea.css";

import { connect } from "react-redux";
import {
  saveMarkdownInstantContent,
  handleTextSelection,
} from "../../../redux/actionsCreators/globalActions";

class EditorArea extends Component {
  constructor(props) {
    super(props);
    this.textAreaRef = React.createRef();
  }

  render() {
    const {
      markdownText,
      fileId,
      editingStatus,
      saveMarkdownInstantContent,
      handleTextSelection,
    } = this.props;

    return (
      <Fragment>
        <div id="editor-area">
          {/* <div id="line-numbers">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div> */}
          <div id="text-area">
            <textarea
              id="editor"
              //ref={textAreaRef2}
              ref={this.textAreaRef}
              onChange={(e) =>
                saveMarkdownInstantContent(fileId, e.target.value)
              }
              onClick={() => handleTextSelection(this.textAreaRef)}
              onSelect={() => handleTextSelection(this.textAreaRef)}
              value={markdownText}
              readOnly={editingStatus === "idle" ? true : false}
              placeholder={editingStatus === "idle" ? "" : "Start here..."}
            ></textarea>
          </div>
        </div>
      </Fragment>
    );
  }
}

const madDispatch = (dispatch) => {
  return {
    saveMarkdownInstantContent: (fileId, content) =>
      dispatch(saveMarkdownInstantContent(fileId, content)),
    handleTextSelection: (textAreaRef) =>
      dispatch(handleTextSelection(textAreaRef)),
  };
};

const mapState = (state) => {
  const { editingStatus, markdownText } = state.markdownFile;
  const { textSelection } = state.textSelection;
  const { fileId } = state.markdownStore;

  return {
    editingStatus,
    markdownText,
    textSelection,
    fileId,
  };
};

export default connect(mapState, madDispatch, null, { forwardRef: true })(
  EditorArea
);
