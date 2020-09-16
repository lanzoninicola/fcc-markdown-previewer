import { MARKDOWN_EDITOR_STORE } from "../../config/localStore";
import {
  MARKDOWN_STORE_NEW,
  MARKDOWN_STORE_FILE_NEWID,
  MARKDOWN_STORE_FILE_NEWNAME,
  MARKDOWN_STORE_FILE_CONTENT,
  MARKDOWN_STORE_FILE_TO_HISTORY,
} from "../actions/actions";
import { markdownLocalStore } from "../../factories/markdownStore/MarkdownLocalStore";

const markdownStorage = markdownLocalStore(MARKDOWN_EDITOR_STORE);

export const createMarkdownEditorStore = () => {
  markdownStorage.initStore();

  return {
    type: MARKDOWN_STORE_NEW,
  };
};

export const createNewMarkdownFileIntoStore = (fileName) => {
  const fileId = markdownStorage.createNewFile(fileName);

  return {
    type: MARKDOWN_STORE_FILE_NEWID,
    payload: fileId,
  };
};

export const setFileName = (e) => {
  return {
    type: MARKDOWN_STORE_FILE_NEWNAME,
    payload: e.target.value,
  };
};

export const saveInstantContentIntoStore = (fileId, content) => {
  markdownStorage.storeFileInstantContent(fileId, content);

  return {
    type: MARKDOWN_STORE_FILE_CONTENT,
  };
};

export const saveContentIntoHistoryStore = (fileId) => {
  markdownStorage.storeFileContentToHistory(fileId);

  return {
    type: MARKDOWN_STORE_FILE_TO_HISTORY,
  };
};
