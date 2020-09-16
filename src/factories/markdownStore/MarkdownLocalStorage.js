import { localStorageItem } from "../localStorage/LocalStorage";
import { v4 as uuidv4 } from "uuid";

export const markdownLocalStorage = (name) => {
  const localStorage = localStorageItem(name);
  return {
    ...localStorage,
    // getSchemaFileStore: () => {
    //   return [
    //     {
    //       id: null,
    //       name: null,
    //       source: null,
    //       created_at: null,
    //       updated_at: null,
    //     },
    //   ];
    // },
    // getSchemaInstantContent: () => {
    //   return {
    //     uid1: {
    //       content: null,
    //     },
    //   };
    // },
    // getSchemafilesHistory: () => {
    //   return {
    //     uid1: {
    //       versionsNumber: [0, 1, 2, 3, 4],
    //       versionsContent: {
    //         0: {
    //           content: "lorem ipsum idioma",
    //         },
    //         1: {
    //           content: "lorem ipsum idioma addade",
    //         },
    //       },
    //     },
    //   };
    // },
    getSchema: () => {
      return {
        files: [],
        instantContent: {},
        filesHistory: {},
      };
    },
    getNewId: () => {
      return uuidv4();
    },
    getIdtoString: (uuid) => {
      return uuid.split("-").join("");
    },
    addFile: (id, fileName) => {
      const markdownLocalStore = localStorage.getValue();
      const today = new Date().toLocaleString();

      markdownLocalStore.files.push({
        id: id,
        name: fileName,
        source: "local",
        created_at: today,
      });

      localStorage.setValue(markdownLocalStore);

      return id;
    },
    saveContent: (fileId, content) => {
      const markdownLocalStore = localStorage.getValue();

      if (!markdownLocalStore.instantContent.hasOwnProperty(fileId)) {
        markdownLocalStore.instantContent[fileId] = {};
      }

      markdownLocalStore.instantContent[fileId].content = content;

      localStorage.setValue(markdownLocalStore);
    },
    addToHistory: (fileId) => {
      const markdownLocalStore = localStorage.getValue();

      let filesHistory = { ...markdownLocalStore.filesHistory };
      let newFileHistoryData = { ...filesHistory };
      let lastFileVersion = -1;
      const today = new Date().toLocaleString();

      const isHistoryExists = markdownLocalStore.filesHistory.hasOwnProperty(
        fileId
      );

      if (!isHistoryExists) {
        const newFilesHistory = {
          ...filesHistory,
          [fileId]: {
            versionsNumber: [],
            versionsContent: {},
          },
        };

        newFileHistoryData = { ...newFilesHistory };
      } else {
        const currentFileVersions =
          markdownLocalStore.filesHistory[fileId].versionsNumber;

        lastFileVersion = currentFileVersions[currentFileVersions.length - 1];
      }

      const nextVersion = lastFileVersion + 1;
      const contentToStore = markdownLocalStore.instantContent[fileId].content;

      newFileHistoryData[fileId].versionsNumber.push(nextVersion);
      newFileHistoryData[fileId].versionsContent = {
        ...newFileHistoryData[fileId].versionsContent,
        [nextVersion]: {
          content: contentToStore,
          saved_at: today,
        },
      };

      markdownLocalStore.filesHistory = newFileHistoryData;

      localStorage.setValue(markdownLocalStore);
    },
  };
};

// filesHistory: {
//     uid1: {
//       versionsNumber: [0, 1, 2, 3, 4],
//       versionsContent: {
//         0: {
//           content: 'lorem ipsum idioma',
//           saved_at: ''
//         },
//         1: {
//           content: 'lorem ipsum idioma addade',
//           saved_at: ''
//         },
//       },
//     },

// const MARKDOWN_EDITOR_STORE = {
//   files: [
//     { id: 'uid1', name: 'la nuova pace', source: 'local', created_at: '', updated_at: ''},
//     { id: 'uid2', name: 'il nuovo mondo', source: 'github', created_at: '', updated_at: '' },
//   ],
//   instantContent: {
//     uid1: {
//       content: 'lorem Ipsum',
//     },
//     uid2: {
//       content: 'lorem Ipsum',
//     },
//   },
//   filesHistory: {
//     uid1: {
//       versionsNumber: [0, 1, 2, 3, 4],
//       versionsContent: {
//         0: {
//           content: 'lorem ipsum idioma',
//           saved_at: ''
//         },
//         1: {
//           content: 'lorem ipsum idioma addade',
//           saved_at: ''
//         },
//       },
//     },
//     uid2: {
//       versionsNumber: [0, 1],
//       versionsContent: {
//         0: {
//           content: 'lorem ipsum idioma',
//         },
//         1: {
//           content: 'lorem ipsum idioma addade',
//         },
//       },
//     },
//   },
// };
