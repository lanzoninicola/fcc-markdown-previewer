import {
  NEW_FILE_SHOW_FORM,
  NEW_FILE_CLOSE_FORM,
  EDITOR_STATUS_INIT,
  MARKDOWN_FILE_CONTENT_NEW,
  MARKDOWN_TEXT_CONTENT_SAVE,
  MARKDOWN_FILE_CONTENT_EDIT,
  MARKDOWN_FILE_CONTENT_CLEAR,
  MARKDOWN_TEXT_SELECTION,
  TEXT_FORMATTING_APPLIED_H1,
  TEXT_FORMATTING_APPLIED_H2,
  TEXT_FORMATTING_APPLIED_H3,
  TEXT_FORMATTING_APPLIED_BOLD,
  TEXT_FORMATTING_APPLIED_ITALIC,
  TEXT_FORMATTING_APPLIED_STRIKETROUGH,
  TEXT_FORMATTING_APPLIED_CODE,
  TEXT_FORMATTING_APPLIED_BLOCKCODE,
  TEXT_FORMATTING_APPLIED_LINK,
  TEXT_FORMATTING_APPLIED_LIST,
  TEXT_FORMATTING_APPLIED_NUMBERS,
  TEXT_FORMATTING_APPLIED_TABLE,
  ADDING_IMAGE_SHOW_FORM,
  ADDING_IMAGE_SET_DESCRIPTION,
  ADDING_IMAGE_SET_IMAGEURL,
  TEXT_FORMATTING_APPLIED_IMAGE,
  ADDING_IMAGE_CLOSE_FORM,
  ADDING_LINK_SHOW_FORM,
  ADDING_LINK_CLOSE_FORM,
  ADDING_LINK_SET_URL,
} from "../actions/actions";

import {
  createMarkdownEditorStore,
  createNewMarkdownFileIntoStore,
  saveInstantContentIntoStore,
} from "./markdownStoreActions";

export const initializeApplication = () => (dispatch) => {
  return [dispatch(createMarkdownEditorStore()), dispatch(initEditorStatus())];
};

export const initEditorStatus = () => {
  return {
    type: EDITOR_STATUS_INIT,
    payload: "idle",
  };
};

export const showFormToCreateNewFile = () => {
  return {
    type: NEW_FILE_SHOW_FORM,
    payload: true,
  };
};

export const closeFormToCreateNewFile = () => {
  return {
    type: NEW_FILE_CLOSE_FORM,
    payload: false,
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

export const setH1 = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(startSelection, 0, "# ");
    newMarkdownText = textToFormat.join("");
  }

  saveInstantContentIntoStore(fileId, newMarkdownText);

  return {
    type: TEXT_FORMATTING_APPLIED_H1,
    payload: newMarkdownText,
  };
};

export const setH2 = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  console.log("setH2 - textSelection", textSelection);

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(startSelection, 0, "## ");
    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_H2,
    payload: newMarkdownText,
  };
};

export const setH3 = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(startSelection, 0, "### ");
    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_H3,
    payload: newMarkdownText,
  };
};

export const setBold = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "**");
    textToFormat.splice(startSelection, 0, "**");

    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_BOLD,
    payload: newMarkdownText,
  };
};

export const setItalic = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "_");
    textToFormat.splice(startSelection, 0, "_");

    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_ITALIC,
    payload: newMarkdownText,
  };
};

export const setStrikeThrough = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "~~");
    textToFormat.splice(startSelection, 0, "~~");

    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_STRIKETROUGH,
    payload: newMarkdownText,
  };
};

export const setCode = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "`");
    textToFormat.splice(startSelection, 0, "`");

    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_CODE,
    payload: newMarkdownText,
  };
};

export const setBlockCode = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "```");
    textToFormat.splice(startSelection, 0, "```");

    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_BLOCKCODE,
    payload: newMarkdownText,
  };
};

export const setList = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "");
    textToFormat.splice(startSelection, 0, "- ");
    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_LIST,
    payload: newMarkdownText,
  };
};

export const setNumbers = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (markdownText && textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "");
    textToFormat.splice(startSelection, 0, "1. ");
    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_NUMBERS,
    payload: newMarkdownText,
  };
};

export const showFormToInsertImage = () => {
  return {
    type: ADDING_IMAGE_SHOW_FORM,
    payload: true,
  };
};

export const closeFormToInsertImage = () => {
  return {
    type: ADDING_IMAGE_CLOSE_FORM,
    payload: false,
  };
};

export const setImageDescription = (e) => {
  return {
    type: ADDING_IMAGE_SET_DESCRIPTION,
    payload: e.target.value,
  };
};

export const setImageURL = (e) => {
  return {
    type: ADDING_IMAGE_SET_IMAGEURL,
    payload: e.target.value,
  };
};

export const setImage = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  },
  imageData = {
    URL: "",
    description: "",
  }
) => {
  console.log("globalActions - setImage - function fired", toFormat, imageData);

  const { markdownText, textSelection } = toFormat;
  const { description, url } = imageData;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  let imagemarkdownText = `![${description}](${url})`;

  console.log(
    "globalActions - setImage - (markdownText && textSelection)",
    markdownText && textSelection,
    markdownText,
    textSelection
  );

  if (textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "");
    textToFormat.splice(startSelection, 0, imagemarkdownText);
    console.log("globalActions - setImage - textToFormat", textToFormat);
    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  console.log("globalActions - setImage - newMarkdownText", newMarkdownText);

  return {
    type: TEXT_FORMATTING_APPLIED_IMAGE,
    payload: newMarkdownText,
  };
};

export const addingImage = (fileId, toFormat, imageData) => (dispatch) => {
  console.log(
    "globalActions - addingImage - function fired",
    toFormat,
    imageData
  );

  return [
    dispatch(closeFormToInsertImage()),
    dispatch(setImage(fileId, toFormat, imageData)),
  ];
};

export const setTable = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  }
) => {
  const { markdownText, textSelection } = toFormat;

  const tablemarkdownText =
    "Header1 | Header2 | Header3 \r ------------ | ------------- | ------------- \r Cell(1:1) | Cell(1:2) | Cell(1:3) \r Cell(2:1) | Cell(2:2) | Cell(2:3) \r";

  let textToFormat = [];
  let newMarkdownText = markdownText;

  if (textSelection) {
    const { startSelection, endSelection } = textSelection;
    textToFormat.push(...markdownText.split(""));
    textToFormat.splice(endSelection, 0, "");
    textToFormat.splice(startSelection, 0, tablemarkdownText);
    newMarkdownText = textToFormat.join("");

    console.log("setTable - fileId", fileId);

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  return {
    type: TEXT_FORMATTING_APPLIED_TABLE,
    payload: newMarkdownText,
  };
};

export const showFormToInsertLink = () => {
  return {
    type: ADDING_LINK_SHOW_FORM,
    payload: true,
  };
};

export const closeFormToInsertLink = () => {
  return {
    type: ADDING_LINK_CLOSE_FORM,
    payload: false,
  };
};

export const setURL = (e) => {
  return {
    type: ADDING_LINK_SET_URL,
    payload: e.target.value,
  };
};

export const setLink = (
  fileId,
  toFormat = {
    markdownText: "",
    textSelection: { startSelection: 0, endSelection: 0 },
  },
  linkData = {
    URL: "",
  }
) => {
  console.log("globalActions - setLink - function fired", toFormat, linkData);

  const { markdownText, textSelection } = toFormat;
  const { url } = linkData;

  let textToFormat = [];
  let newMarkdownText = markdownText;

  console.log(
    "globalActions - setLink - (markdownText && textSelection)",
    markdownText && textSelection,
    markdownText,
    textSelection
  );

  if (textSelection) {
    const { startSelection, endSelection } = textSelection;
    let linkMarkdownText = `[${markdownText.substring(
      startSelection,
      endSelection
    )}](${url})`;

    let noOfHighlightedChar = endSelection - startSelection;

    textToFormat.push(...markdownText.split(""));
    //textToFormat.filter((char) => char !== " ");
    textToFormat.splice(endSelection, 0, "");
    console.log(
      "globalActions - setLink - textToFormat - splice endSelection",
      textToFormat
    );

    textToFormat.splice(startSelection, noOfHighlightedChar, linkMarkdownText);

    console.log(
      "globalActions - setLink - textToFormat - splice startSelection",
      textToFormat
    );
    newMarkdownText = textToFormat.join("");

    saveInstantContentIntoStore(fileId, newMarkdownText);
  }

  console.log("globalActions - setLink - newMarkdownText", newMarkdownText);

  return {
    type: TEXT_FORMATTING_APPLIED_LINK,
    payload: newMarkdownText,
  };
};

export const addingLink = (fileId, toFormat, linkData) => (dispatch) => {
  console.log(
    "globalActions - addingLink - function fired",
    toFormat,
    linkData
  );

  return [
    dispatch(closeFormToInsertLink()),
    dispatch(setLink(fileId, toFormat, linkData)),
  ];
};
