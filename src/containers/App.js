import React, { Component, Fragment } from "react";
import "./App.css";
import placeholder from "../helper/placeholder";
import PreviewPanel from "./PreviewPanel/PreviewPanel";
import EditorPanel from "./EditorPanel/EditorPanel";
import Header from "../components/Header/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import FormattingToolbar from "../components/FormattingToolbar/FormattingToolbar";
import Modal from "../components/Modal/Modal";
import FormInsertImage from "../components/FormInsertImage/FormInsertImage";
import FormInsertLink from "../components/FormInsertLink/FormInsertLink";
import Button from "../components/Button/Button";
import { LocalStorageItem } from "../helper/LocalStorage";
import {
  getmarkdownTextLog,
  getmarkdownVersionsHistory,
  setmarkdownTextLog,
  setmarkdownVersionsHistory,
  resetmarkdownTextLog,
  resetmarkdownVersionsHistory,
  resetLocalStorageSession,
  openFullscreen,
  closeFullscreen,
  resetUltraFocusMode,
} from "../helper/helper";

import { connect } from "react-redux";

// manage with a modal rollbackData after closed or crashed see: this.rollbackData
// pressing new and content in markdown snapashot fire and alert
// pressing CLEAR and content in markdown snapashot fire and alert
// NOTIFICATION BACKGROUND
// background: rgb(255,255,255);
// background: linear-gradient(45deg, rgba(255,255,255,0) 44%, rgba(10,131,136,1) 76%);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,

      editingStatus: "idle",

      markdownText: placeholder,
      markdownImageDescription: "",
      markdownImageURL: "",

      lastmarkdownVersion: 0,

      markdownFoo: new LocalStorageItem("markdownFoo"),
      markdownVersionsHistory: [],
      versionSelectedFromHistory: 0,

      showModalRollbackContent: false,
      //showFormInsertImage: false,

      textSelection: {
        // textSelected: '',
        startSelection: 0,
        endSelection: 0,
      },

      focusMode: false,
      ultraFocusMode: false,

      localStorageSpaceInUse: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("resize", this.setWindowDimensions());

    if (this.isThereDataInLocalStorageSession()) {
      this.setState({ showModalRollbackContent: true });
    } else {
      this.initSession();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this.setWindowDimensions());
  }

  setWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  isThereDataInLocalStorageSession = () => {
    const markdownTextLog = getmarkdownTextLog();
    const markdownVersionsHistory = getmarkdownVersionsHistory();

    return (
      (markdownTextLog && markdownTextLog.length > 0) || markdownVersionsHistory
    );
  };

  rollbackData = () => {
    const markdownTextLogData = getmarkdownTextLog();
    const markdownVersionsHistoryData = getmarkdownVersionsHistory();

    let lastmarkdownSavedVersion = 0;
    let markdownVersionsHistory = [];
    if (markdownVersionsHistoryData) {
      lastmarkdownSavedVersion =
        markdownVersionsHistoryData["versions"][
          markdownVersionsHistoryData["versions"].length - 1
        ];
      markdownVersionsHistory = markdownVersionsHistoryData["versions"];
    }

    this.setState({
      markdownText: markdownTextLogData,
      lastmarkdownVersion: lastmarkdownSavedVersion,
      markdownVersionsHistory: markdownVersionsHistory,
      editingStatus: "InProgress",
      showModalRollbackContent: false,
    });
  };

  initSession = () => {
    resetLocalStorageSession();
    this.setState({
      showModalRollbackContent: false,
      editingStatus: "idle",
    });
  };

  handleNewmarkdownContent = () => {
    this.clearmarkdownContent();
    resetmarkdownTextLog();
    resetmarkdownVersionsHistory();
    this.resetmarkdownVersion();

    this.setState({ editingStatus: "New" });
  };

  handleClearmarkdownContent = () => {
    this.clearmarkdownContent();
  };

  handleAddmarkdownContentToHistory = () => {
    let newmarkdownVersion;

    const [
      existsmarkdownVersionsHistorySaved,
      markdownVersionsHistory,
    ] = this.getmarkdownVersionsHistorySaved();

    if (existsmarkdownVersionsHistorySaved) {
      newmarkdownVersion = this.appendNewmarkdownContentToHistory(
        this.state.lastmarkdownVersion + 1,
        markdownVersionsHistory
      );
      // increment the version based on saved version
      this.setState((state) => ({
        lastmarkdownVersion: state.lastmarkdownVersion + 1,
        versionSelectedFromHistory: null,
      }));
    } else {
      newmarkdownVersion = this.createNewmarkdownVersionHistory();
    }

    setmarkdownVersionsHistory(newmarkdownVersion);
  };

  clearmarkdownContent = () => {
    this.setState({ markdownText: "" });
  };

  resetmarkdownVersion = () => {
    this.setState({
      lastmarkdownVersion: 0,
      markdownVersionsHistory: [],
    });
  };

  getmarkdownVersionsHistorySaved = () => {
    let markdownVersionsHistory = getmarkdownVersionsHistory();

    if (markdownVersionsHistory) {
      return [true, markdownVersionsHistory];
    }

    return [false, { markdownTextLogs: {}, versions: [] }];
  };

  createNewmarkdownVersionHistory = () => {
    const saveDate = new Date();

    let newmarkdownVersion = {
      markdownSnaphosts: {
        0: {
          markdownText: this.state.markdownText,
          date: saveDate,
        },
      },
      versions: [0],
    };

    let newmarkdownVersionsHistory = [...this.state.markdownVersionsHistory];
    newmarkdownVersionsHistory.push(0);

    this.setState({
      lastSaveDate: saveDate,
      markdownVersionsHistory: newmarkdownVersionsHistory,
    });

    return newmarkdownVersion;
  };

  appendNewmarkdownContentToHistory = (newVersion, history) => {
    const { markdownSnaphosts, versions } = history;

    const saveDate = new Date();

    let newmarkdownVersion = {
      markdownSnaphosts: {
        ...markdownSnaphosts,
        [newVersion]: {
          markdownText: this.state.markdownText,
          date: saveDate,
        },
      },
      versions: [...versions, newVersion],
    };

    let newmarkdownVersionsHistory = [...this.state.markdownVersionsHistory];
    newmarkdownVersionsHistory.push(newVersion);

    this.setState({
      lastSaveDate: saveDate,
      markdownVersionsHistory: newmarkdownVersionsHistory,
    });

    return newmarkdownVersion;
  };

  handlemarkdownVersionChange = (e) => {
    let versionSelectedFromHistory = e.target.value;
    const versionNumber = versionSelectedFromHistory.substring(8, 99);
    this.restoremarkdownFromHistory(versionNumber);

    this.setState({ versionSelectedFromHistory: versionNumber });
  };

  restoremarkdownFromHistory = (versionNumber) => {
    const markdownVersionsHistory = getmarkdownVersionsHistory();
    const markdownTextFromHistory =
      markdownVersionsHistory.markdownSnaphosts[versionNumber].markdownText;

    this.setState({ markdownText: markdownTextFromHistory });
  };

  // setTable = (text) => {
  //   const { startSelection, endSelection } = this.state.textSelection;

  //   const tablemarkdownText =
  //     "Header1 | Header2 | Header3 \r ------------ | ------------- | ------------- \r Cell(1:1) | Cell(1:2) | Cell(1:3) \r Cell(2:1) | Cell(2:2) | Cell(2:3) \r";

  //   text.splice(endSelection, 0, "");
  //   text.splice(startSelection, 0, tablemarkdownText);
  //   return text.join("");
  // };

  handleFocusMode = (enable) => {
    this.setState({ focusMode: enable }, () => {
      if (!enable) {
        resetUltraFocusMode();
        this.handleImmersiveWriting(false);
      }
    });
  };

  handleImmersiveWriting = (enable) => {
    console.log("handleImmersiveWriting", enable);
    this.setState({ ultraFocusMode: enable });

    if (enable) {
      openFullscreen();
    } else {
      closeFullscreen().catch(() => {
        console.log("App - handleImmersiveWriting(): an error occured");
      });
    }
  };

  render() {
    const {
      screenWidth,
      editingStatus,
      markdownText,
      markdownVersionsHistory,
      lastmarkdownVersion,
      versionSelectedFromHistory,
      showModalRollbackContent,
      //showFormInsertImage,
      //markdownImageDescription,
      //markdownImageURL,
      focusMode,
    } = this.state;

    const modalRollbackContent = (
      <Modal
        title={"Welcome back..."}
        message={
          "There is some content saved from the last session. Do you want to restore it?"
        }
      >
        <Button type="primary" eventHandler={this.rollbackData}>
          YES
        </Button>
        <Button type="secondary" eventHandler={this.initSession}>
          NO
        </Button>
      </Modal>
    );

    return (
      <Fragment>
        {this.props.showFormInsertImage && <FormInsertImage />}
        {this.props.showFormInsertLink && <FormInsertLink />}
        {/* {showModalRollbackContent && modalRollbackContent} !!!!!! DA RIPRISTINARE*/}
        {!focusMode && <Header screenWidth={screenWidth} />}
        {/* <div className="container" style={{ flexDirection: (screenWidth <= 1366) ? "column" : "row" }}> */}
        <FormattingToolbar
          screenWidth={screenWidth}
          focusMode={focusMode}
          editingStatus={editingStatus}
          handleNewmarkdownContent={this.handleNewmarkdownContent}
          handleAddmarkdownContentToHistory={
            this.handleAddmarkdownContentToHistory
          }
          handleClearmarkdownContent={this.handleClearmarkdownContent}
        />
        <div className="container">
          {!focusMode && <Dashboard text={markdownText} />}
        </div>
        <div
          className={`container-editor-area ${
            focusMode && "container-editor-area-focusMode"
          }`}
          style={{
            flexDirection: screenWidth < 950 ? "column" : "row",
          }}
        >
          <EditorPanel
            //editingStatus={editingStatus}
            //markdownText={markdownText}
            screenWidth={screenWidth}
            focusMode={focusMode}
            markdownVersionsHistory={markdownVersionsHistory}
            lastmarkdownVersion={lastmarkdownVersion}
            versionSelectedFromHistory={versionSelectedFromHistory}
            //handleEditorChange={this.handleEditorChange}
            //handleTextSelection={this.handleTextSelection}
            handlemarkdownVersionChange={this.handlemarkdownVersionChange}
            //textAreaRef={this.textAreaRef}
            handleFocusMode={this.handleFocusMode}
            handleImmersiveWriting={this.handleImmersiveWriting}
            handleHideGridNumbers={this.handleHideGridNumbers}
          />
          {!focusMode && <PreviewPanel />}
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => {
  const { markdownImage, markdownLink } = state;
  const { showFormInsertImage } = markdownImage;
  const { showFormInsertLink } = markdownLink;

  //  console.log("app - mapState - state", markdownImage);

  return {
    showFormInsertImage,
    showFormInsertLink,
  };
};

export default connect(mapState)(App);
