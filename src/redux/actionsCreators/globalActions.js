import {
  EDITOR_STATUS_INIT,
  MARKDOWN_FILE_CONTENT_NEW,
  MARKDOWN_FILE_CONTENT_EDIT,
  MARKDOWN_FILE_CONTENT_CLEAR,
  MARKDOWN_TEXT_SELECTION,
} from "../actions/actions";

import { closeFormToCreateNewFile } from "./textFormatting/textFormattingActions";

import {
  createMarkdownEditorStore,
  createNewMarkdownFileIntoStore,
  saveInstantContentIntoStore,
} from "./markdownStore/markdownStoreActions";

export const initializeApplication = () => (dispatch) => {
  return [dispatch(createMarkdownEditorStore()), dispatch(initEditorStatus())];
};

export const initEditorStatus = () => {
  return {
    type: EDITOR_STATUS_INIT,
    payload: "idle",
  };
};

export const createNewMarkdownFile = (fileName) => (dispatch) => {
  return [
    dispatch(createNewMarkdownFileIntoStore(fileName)),
    dispatch(closeFormToCreateNewFile()),
    dispatch(newMarkdownContent()),
    dispatch(clearMarkdownContent()),
  ];
};

export const newMarkdownContent = () => {
  return {
    type: MARKDOWN_FILE_CONTENT_NEW,
    payload: "new",
  };
};

export const saveMarkdownInstantContent = (fileId, content) => (dispatch) => {
  return [
    dispatch(editMarkdownContent(content)),
    dispatch(saveInstantContentIntoStore(fileId, content)),
  ];
};

export const editMarkdownContent = (content) => {
  return {
    type: MARKDOWN_FILE_CONTENT_EDIT,
    payload: {
      editingStatus: "in progress",
      text: content,
    },
  };
};

export const clearMarkdownContent = () => {
  return {
    type: MARKDOWN_FILE_CONTENT_CLEAR,
    payload: "",
  };
};

export const handleTextSelection = (text) => {
  let textSelection = {};
  let nextSelectionRange = {
    startSelection: 0,
    endSelection: 0,
  };

  let nextStartSelection = text.current.selectionStart
    ? text.current.selectionStart
    : nextSelectionRange.startSelection;
  let nextEndSelection = text.current.selectionEnd
    ? text.current.selectionEnd
    : nextSelectionRange.endSelection;

  nextSelectionRange.startSelection = nextStartSelection;
  nextSelectionRange.endSelection = nextEndSelection;

  return {
    type: MARKDOWN_TEXT_SELECTION,
    payload: { ...textSelection, ...nextSelectionRange },
  };
};
