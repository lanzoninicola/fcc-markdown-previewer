import { markdownLocalStorage } from "./MarkdownLocalStorage";

export const markdownLocalStore = (name) => {
  const markdownStore = markdownLocalStorage(name);
  return {
    ...markdownStore,

    initStore: () => {
      const markdownInLocalStorage = markdownStore.getValue(name);

      const newMarkdownStore = markdownStore.getSchema();

      if (!markdownInLocalStorage) {
        markdownStore.setValue(newMarkdownStore);
      }
    },
    createNewFile: (fileName) => {
      let newId = markdownStore.getNewId();
      const newFileId = markdownStore.addFile(newId, fileName);
      return newFileId;
    },
    storeFileInstantContent: (fileId, content) => {
      let stringFileId = markdownStore.getIdtoString(fileId);
      markdownStore.saveContent(stringFileId, content);
    },
    storeFileContentToHistory: (fileId) => {
      console.log(
        "markdownLocalStore - storeFileContentHistory - fileId",
        fileId
      );
      let stringFileId = markdownStore.getIdtoString(fileId);
      markdownStore.addToHistory(stringFileId);
    },
  };
};

/*

if (value === undefined) {
    throw new Error(
      "Function expected a value parameter. Operation interrupted"
    );
  }

  if (typeof value === "object") {
    localStorage.setItem(itemName, JSON.stringify(value));
  } else {
    localStorage.setItem(itemName, value);
  }

   */
