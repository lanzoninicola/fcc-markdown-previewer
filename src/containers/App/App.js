import React, { Component, Fragment } from "react";
import "./App.css";
import placeholder from "../../helper/placeholder";
import PreviewPanel from "../PreviewPanel/PreviewPanel";
import EditorPanel from "../EditorPanel/EditorPanel";
import Header from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";
import FormattingToolbar from "../../components/FormattingToolbar/FormattingToolbar";
import FormInsertImage from "../../components/FormInsertImage/FormInsertImage";
import FormInsertLink from "../../components/FormInsertLink/FormInsertLink";
import {
  openFullscreen,
  closeFullscreen,
  resetUltraFocusMode,
} from "../../helper/helper";

import { initializeApplication } from "../../redux/actionsCreators/globalActions";

import { connect } from "react-redux";
import FormNewFile from "../../components/FormNewFile/FormNewFile";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,

      markdownText: placeholder,

      focusMode: false,
      ultraFocusMode: false,

      localStorageSpaceInUse: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("resize", this.setWindowDimensions());

    this.props.initializeApplication();
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this.setWindowDimensions());
  }

  setWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

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
      markdownText,
      markdownVersionsHistory,
      lastmarkdownVersion,
      versionSelectedFromHistory,
      focusMode,
    } = this.state;

    return (
      <Fragment>
        {this.props.showFormInsertFile && <FormNewFile />}
        {this.props.showFormInsertImage && <FormInsertImage />}
        {this.props.showFormInsertLink && <FormInsertLink />}
        {!focusMode && <Header screenWidth={screenWidth} />}
        {/* <div className="container" style={{ flexDirection: (screenWidth <= 1366) ? "column" : "row" }}> */}
        <FormattingToolbar
          screenWidth={screenWidth}
          handleAddmarkdownContentToHistory={
            this.handleAddmarkdownContentToHistory
          }
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
            screenWidth={screenWidth}
            focusMode={focusMode}
            handleFocusMode={this.handleFocusMode}
            handleImmersiveWriting={this.handleImmersiveWriting}
          />
          {!focusMode && <PreviewPanel />}
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => {
  const { markdownStore, markdownImage, markdownLink } = state;
  const { showFormInsertImage } = markdownImage;
  const { showFormInsertLink } = markdownLink;
  const { showFormInsertFile } = markdownStore;

  //  console.log("app - mapState - state", markdownImage);

  return {
    showFormInsertImage,
    showFormInsertLink,
    showFormInsertFile,
  };
};

const mapDispatch = (dispatch) => {
  return {
    initializeApplication: () => dispatch(initializeApplication()),
  };
};

export default connect(mapState, mapDispatch)(App);
