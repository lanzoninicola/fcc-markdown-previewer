import React from "react";
import FormattingToolbarItem from "../FormattingToolbarItem/FormattingToolbarItem";

import {
  showFormToCreateNewFile,
  clearMarkdownContent,
  setH1,
  setH2,
  setH3,
  setBold,
  setItalic,
  setStrikeThrough,
  setCode,
  setBlockCode,
  showFormToInsertLink,
  setList,
  setNumbers,
  showFormToInsertImage,
  setTable,
} from "../../../../redux/actionsCreators/globalActions";

import { saveContentIntoHistoryStore } from "../../../../redux/actionsCreators/markdownStoreActions";
import { connect } from "react-redux";

const FormattingToolbarItemList = ({
  focusMode,

  // from REDUX
  editingStatus,
  markdownText,
  textSelection,
  showFormToCreateNewFile,
  saveContentIntoHistoryStore,
  clearMarkdownContent,
  setH1,
  setH2,
  setH3,
  setBold,
  setItalic,
  setStrikeThrough,
  setCode,
  setBlockCode,
  setLink,
  setList,
  setNumbers,
  showFormToInsertImage,
  setTable,
  fileId,
  ...props
}) => {
  const toolbarItems = [
    {
      label: "NEW",
      icon: { name: "new" },
      alt: "New markdown content",
      disabled: false, //(focusMode === false ? false : true) || false,
      eventHandler: showFormToCreateNewFile,
    },
    {
      label: "SAVE",
      icon: { name: "save" },
      alt: "Save a version of markdown text",
      disabled:
        //(focusMode === false ? true : false) &&
        markdownText.length === 0
          ? true
          : false && editingStatus === "idle"
          ? true
          : false,
      eventHandler: () => {
        saveContentIntoHistoryStore(fileId);
      },
    },
    {
      label: "COPY",
      icon: { name: "copy" },
      alt: "New markdown content",
      disabled:
        //(focusMode === false ? true : false) &&
        editingStatus === "idle" ? true : false,
      eventHandler: null,
    },
    {
      label: "TIME MACHINE",
      icon: { name: "timemachine" },
      alt: "Get a version of markdown text",
      disabled:
        //(focusMode === false ? true : false) &&
        editingStatus === "idle" ? true : false,
      eventHandler: null, // () => getFileHistory(fileId),
    },
    {
      label: "CLEAR",
      icon: { name: "clear" },
      alt: "Remove markdown Content",
      disabled:
        //(focusMode === false ? true : false) &&
        editingStatus === "idle" ? true : false,
      eventHandler: clearMarkdownContent,
    },
    {
      label: "",
      icon: { name: "separator" },
      alt: "separator",
      disabled: true,
    },
    {
      label: "H1",
      icon: { name: "h1" },
      alt: "H1",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setH1(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "H2",
      icon: { name: "h2" },
      alt: "H2",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setH2(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "H3",
      icon: { name: "h3" },
      alt: "H3",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setH3(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "BOLD",
      icon: { name: "bold" },
      alt: "Bold",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setBold(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "ITALIC",
      icon: { name: "italic" },
      alt: "Italic",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setItalic(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "STRIKETROUGH",
      icon: { name: "striketrough" },
      alt: "Striketrough",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setStrikeThrough(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "CODE",
      icon: { name: "code" },
      alt: "Code",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setCode(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "BLOCKCODE",
      icon: { name: "code" },
      alt: "Block Code",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setBlockCode(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "LINK",
      icon: { name: "link" },
      alt: "Block Code",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () => setLink(),
    },
    {
      label: "LIST",
      icon: { name: "list" },
      alt: "List",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setList(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "NUMBERS",
      icon: { name: "numbers" },
      alt: "Numbers",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setNumbers(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "IMAGE",
      icon: { name: "image" },
      alt: "Image",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () => showFormToInsertImage(),
    },
    {
      label: "TABLE",
      icon: { name: "table" },
      alt: "Table",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setTable(fileId, {
          markdownText: markdownText,
          ...textSelection,
        }),
    },
  ];

  const renderToolbarItems = toolbarItems.map((item, i) => {
    let toolbarItem = null;

    toolbarItem = (
      <FormattingToolbarItem
        key={i}
        label={item.label}
        icon={item.icon}
        disabled={item.disabled}
        eventHandler={item.eventHandler}
      />
    );
    // }

    return toolbarItem;
  });

  return renderToolbarItems;
};

const mapDispatch = (dispatch) => {
  return {
    showFormToCreateNewFile: () => dispatch(showFormToCreateNewFile()),
    saveContentIntoHistoryStore: (fileId) =>
      dispatch(saveContentIntoHistoryStore(fileId)),
    clearMarkdownContent: () => dispatch(clearMarkdownContent()),
    setH1: (fileId, data) => dispatch(setH1(fileId, data)),
    setH2: (fileId, data) => dispatch(setH2(fileId, data)),
    setH3: (fileId, data) => dispatch(setH3(fileId, data)),
    setBold: (fileId, data) => dispatch(setBold(fileId, data)),
    setItalic: (fileId, data) => dispatch(setItalic(fileId, data)),
    setStrikeThrough: (fileId, data) =>
      dispatch(setStrikeThrough(fileId, data)),
    setCode: (fileId, data) => dispatch(setCode(fileId, data)),
    setBlockCode: (fileId, data) => dispatch(setBlockCode(fileId, data)),
    setLink: () => dispatch(showFormToInsertLink()),
    setList: (fileId, data) => dispatch(setList(fileId, data)),
    setNumbers: (fileId, data) => dispatch(setNumbers(fileId, data)),
    showFormToInsertImage: () => dispatch(showFormToInsertImage()),
    setTable: (fileId, data) => dispatch(setTable(fileId, data)),
  };
};

const mapState = (state) => {
  const { textSelection, markdownFile, markdownStore } = state;
  const { markdownText, editingStatus } = markdownFile;
  const { fileId } = markdownStore;

  //console.log('formattinToolbarItems - mapState - state', textSelection, markdownText)

  return {
    markdownText,
    textSelection,
    editingStatus,
    fileId,
  };
};

export default connect(mapState, mapDispatch)(FormattingToolbarItemList);
