import React, { Component, Fragment, forwardRef } from "react";
import "./EditorArea.css";

import { connect } from "react-redux";
import {
  editMarkdownContent,
  handleTextSelection,
} from "../../../redux/actionsCreators/globalActions";

class EditorArea extends Component {
  constructor(props) {
    super(props);
    this.textAreaRef = React.createRef();
  }

  render() {
    const {
      editMarkdownContent,
      handleTextSelection,
      markdownText,
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
              onChange={editMarkdownContent}
              onClick={() => handleTextSelection(this.textAreaRef)}
              onSelect={() => handleTextSelection(this.textAreaRef)}
              value={markdownText}
              // readOnly={readonly} // da riabilitare
              placeholder="Start here..."
            ></textarea>
          </div>
        </div>
      </Fragment>
    );
  }
}

const madDispatch = (dispatch) => {
  return {
    editMarkdownContent: (e) => dispatch(editMarkdownContent(e)),
    handleTextSelection: (textAreaRef) =>
      dispatch(handleTextSelection(textAreaRef)),
  };
};

const mapState = (state) => {
  const { editingStatus, markdownText } = state.markdownFile;
  const { textSelection } = state.textSelection;

  return {
    editingStatus,
    markdownText,
    textSelection,
  };
};

export default connect(mapState, madDispatch, null, { forwardRef: true })(
  EditorArea
);
