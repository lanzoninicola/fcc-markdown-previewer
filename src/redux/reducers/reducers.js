import {
  MARKDOWN_TEXT_CONTENT_CHANGE,
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
  ADDING_IMAGE_SHOW_FORM,
  ADDING_IMAGE_SET_DESCRIPTION,
  ADDING_IMAGE_SET_IMAGEURL,
  ADDING_IMAGE_CLOSE_FORM,
} from "../actions/actions";

let initStateOfMarkdownFile = {
  editingStatus: "idle", //'InProgress',
  markdownText: "",
};

export const markdownFile = (state = initStateOfMarkdownFile, action) => {
  switch (action.type) {
    case MARKDOWN_TEXT_CONTENT_CHANGE:
      return {
        ...state,
        editingStatus: "InProgress",
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
