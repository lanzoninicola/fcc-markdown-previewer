import {
  MARKDOWN_STORE_NEW,
  NEW_FILE_SHOW_FORM,
  NEW_FILE_CLOSE_FORM,
  MARKDOWN_STORE_FILE_NEWID,
  MARKDOWN_STORE_FILE_NEWNAME,
  MARKDOWN_STORE_FILE_CONTENT,
  MARKDOWN_STORE_FILE_TO_HISTORY,
  EDITOR_STATUS_INIT,
  MARKDOWN_FILE_CONTENT_NEW,
  MARKDOWN_TEXT_CONTENT_SAVE,
  MARKDOWN_FILE_CONTENT_EDIT,
  MARKDOWN_TEXT_CONTENT_COPY,
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
  TEXT_FORMATTING_APPLIED_IMAGE,
  TEXT_FORMATTING_APPLIED_TABLE,
  ADDING_IMAGE_SHOW_FORM,
  ADDING_IMAGE_SET_DESCRIPTION,
  ADDING_IMAGE_SET_IMAGEURL,
  ADDING_IMAGE_CLOSE_FORM,
  ADDING_LINK_SHOW_FORM,
  ADDING_LINK_CLOSE_FORM,
  ADDING_LINK_SET_URL,
} from "../actions/actions";

let initStateOfMarkdownStore = {
  showFormInsertFile: false,
  fileId: null,
  fileName: "",
};

export const markdownStore = (state = initStateOfMarkdownStore, action) => {
  switch (action.type) {
    case NEW_FILE_SHOW_FORM:
      return {
        ...state,
        showFormInsertFile: true,
      };
    case NEW_FILE_CLOSE_FORM:
      return {
        ...state,
        showFormInsertFile: false,
      };
    case MARKDOWN_STORE_NEW:
      return {
        ...state,
      };
    case MARKDOWN_STORE_FILE_NEWID:
      return {
        ...state,
        fileId: action.payload,
      };
    case MARKDOWN_STORE_FILE_NEWNAME:
      return {
        ...state,
        fileName: action.payload,
      };

    default:
      return state;
  }
};

let initStateOfMarkdownFile = {
  editingStatus: "idle", //'InProgress',
  markdownText: "",
  fileCurrentVersion: null,
  fileHistory: null,
  showTimeMachine: false,
};

export const markdownFile = (state = initStateOfMarkdownFile, action) => {
  switch (action.type) {
    case EDITOR_STATUS_INIT:
      return {
        ...state,
        editingStatus: action.payload,
      };
    case MARKDOWN_FILE_CONTENT_NEW:
      return {
        ...state,
        editingStatus: action.payload,
      };
    case MARKDOWN_FILE_CONTENT_EDIT:
      return {
        ...state,
        editingStatus: action.payload.editingStatus,
        markdownText: action.payload.text,
      };
    case MARKDOWN_FILE_CONTENT_CLEAR:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_H1:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_H2:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_H3:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_BOLD:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_ITALIC:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_STRIKETROUGH:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_CODE:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_BLOCKCODE:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_LINK:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_LIST:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_NUMBERS:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_IMAGE:
      return {
        ...state,
        markdownText: action.payload,
      };
    case TEXT_FORMATTING_APPLIED_TABLE:
      return {
        ...state,
        markdownText: action.payload,
      };
    case MARKDOWN_STORE_FILE_TO_HISTORY:
      return {
        ...state,
        fileCurrentVersion: action.payload,
      };

    default:
      return state;
  }
};

let initStateOnTextSelection = {
  textSelection: {
    startSelection: 0,
    endSelection: 0,
  },
};

export const textSelection = (state = initStateOnTextSelection, action) => {
  switch (action.type) {
    case MARKDOWN_TEXT_SELECTION:
      return {
        ...state,
        textSelection: action.payload,
      };
    default:
      return state;
  }
};

let initStateForAddingImage = {
  showFormInsertImage: false,
  description: "",
  url: "",
};

export const markdownImage = (state = initStateForAddingImage, action) => {
  switch (action.type) {
    case ADDING_IMAGE_SHOW_FORM:
      return {
        ...state,
        showFormInsertImage: action.payload,
      };
    case ADDING_IMAGE_SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case ADDING_IMAGE_SET_IMAGEURL:
      return {
        ...state,
        url: action.payload,
      };
    case ADDING_IMAGE_CLOSE_FORM:
      return {
        ...state,
        showFormInsertImage: action.payload,
      };
    default:
      return state;
  }
};

let initStateForAddingLink = {
  showFormInsertLink: false,
  url: "",
};

export const markdownLink = (state = initStateForAddingLink, action) => {
  switch (action.type) {
    case ADDING_LINK_SHOW_FORM:
      return {
        ...state,
        showFormInsertLink: action.payload,
      };

    case ADDING_LINK_SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    case ADDING_LINK_CLOSE_FORM:
      return {
        ...state,
        showFormInsertLink: action.payload,
      };
    default:
      return state;
  }
};
