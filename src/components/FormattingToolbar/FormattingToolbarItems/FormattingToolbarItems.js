import React from "react";
import SvgIcon from "../../SvgIcon/SvgIcon";
import FormattingToolbarItem from "../FormattingToolbarItem/FormattingToolbarItem";

import {
  createNewMarkdowFile,
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
} from "../../../redux/actionsCreators/globalActions";
import { connect } from "react-redux";

const FormattingToolbarItems = ({
  focusMode,
  handleNewmarkdownContent,
  handleAddmarkdownContentToHistory,
  handleClearmarkdownContent,
  handleTextFormatting,

  // from REDUX
  editingStatus,
  markdownText,
  textSelection,
  createNewMarkdowFile,
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
  ...props
}) => {
  const toolbarItems = [
    {
      label: "NEW",
      icon: { name: "new" },
      alt: "New markdown content",
      disabled: (focusMode === false ? false : true) || false,
      eventHandler: createNewMarkdowFile,
    },
    {
      label: "SAVE",
      icon: { name: "save" },
      alt: "Save a version of markdown text",
      disabled:
        (focusMode === false ? true : false) &&
        (editingStatus === "idle" ? true : false),
      eventHandler: handleAddmarkdownContentToHistory,
    },
    {
      label: "COPY",
      icon: { name: "copy" },
      alt: "New markdown content",
      disabled:
        (focusMode === false ? true : false) &&
        (editingStatus === "idle" ? true : false),
      eventHandler: createNewMarkdowFile,
    },
    {
      label: "TIME MACHINE",
      icon: { name: "timemachine" },
      alt: "Get a version of markdown text",
      disabled:
        (focusMode === false ? true : false) &&
        (editingStatus === "idle" ? true : false),
      eventHandler: handleAddmarkdownContentToHistory,
    },
    {
      label: "CLEAR",
      icon: { name: "clear" },
      alt: "Remove markdown Content",
      disabled:
        (focusMode === false ? true : false) &&
        (editingStatus === "idle" ? true : false),
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
        setH1({
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
        setH2({
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
        setH3({
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
        setBold({
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
        setItalic({
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
        setStrikeThrough({
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
        setCode({
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
        setBlockCode({
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "LINK",
      icon: { name: "link" },
      alt: "Block Code",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setLink({
          markdownText: markdownText,
          ...textSelection,
        }),
    },
    {
      label: "LIST",
      icon: { name: "list" },
      alt: "List",
      disabled: editingStatus === "idle" ? true : false,
      eventHandler: () =>
        setList({
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
        setNumbers({
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
        setTable({
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
    createNewMarkdowFile: () => dispatch(createNewMarkdowFile()),
    clearMarkdownContent: () => dispatch(clearMarkdownContent()),
    setH1: (data) => dispatch(setH1(data)),
    setH2: (data) => dispatch(setH2(data)),
    setH3: (data) => dispatch(setH3(data)),
    setBold: (data) => dispatch(setBold(data)),
    setItalic: (data) => dispatch(setItalic(data)),
    setStrikeThrough: (data) => dispatch(setStrikeThrough(data)),
    setCode: (data) => dispatch(setCode(data)),
    setBlockCode: (data) => dispatch(setBlockCode(data)),
    setLink: () => dispatch(showFormToInsertLink()),
    setList: (data) => dispatch(setList(data)),
    setNumbers: (data) => dispatch(setNumbers(data)),
    showFormToInsertImage: () => dispatch(showFormToInsertImage()),
    setTable: (data) => dispatch(setTable(data)),
  };
};

const mapState = (state) => {
  const { textSelection, markdownFile } = state;
  const { markdownText, editingStatus } = markdownFile;

  //console.log('formattinToolbarItems - mapState - state', textSelection, markdownText)

  return {
    markdownText,
    textSelection,
    editingStatus,
  };
};

export default connect(mapState, mapDispatch)(FormattingToolbarItems);
