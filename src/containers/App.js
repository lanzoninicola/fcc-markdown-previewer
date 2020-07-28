import React, { Component, Fragment } from 'react';
import './App.css';
import PreviewPanel from './PreviewPanel/PreviewPanel';
import EditorPanel from './EditorPanel/EditorPanel';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import Toolbar from '../components/Toolbar/Toolbar';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import {
  getMarkupTextLogger,
  getMarkupVersionsHistory,
  setMarkupTextLogger,
  setMarkupVersionsHistory,
  resetMarkupTextLogger,
  resetMarkupVersionsHistory,
  resetLocalStorageSession
} from '../helper/helper'

// manage with a modal rollbackData after closed or crashed see: this.rollbackData
// pressing new and content in markup snapashot fire and alert
// pressing CLEAR and content in markup snapashot fire and alert

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screenWidth: 0,
      editingStatus: 'idle',
      markupText: placeholder,
      lastMarkupVersion: 0,
      markupVersionsHistory: [],
      versionSelectedFromHistory: 0,

      showModalRollbackContent: false,

      textSelected: ''
    }
  }

  componentDidMount() {
    document.addEventListener("resize", this.setWindowDimensions());

    if (this.isThereDataInLocalStorageSession()) {
      this.setState({ showModalRollbackContent: true })
    } else {
      this.initSession()
    }
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this.setWindowDimensions())
  }

  setWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth });
  }

  isThereDataInLocalStorageSession = () => {
    const markupTextLogger = getMarkupTextLogger();
    const markupVersionsHistory = getMarkupVersionsHistory();

    return ((markupTextLogger && markupTextLogger.length > 0) || (markupVersionsHistory));
  }

  rollbackData = () => {
    const markupTextLoggerData = getMarkupTextLogger();
    const markupVersionsHistoryData = getMarkupVersionsHistory();

    let lastMarkupSavedVersion = 0;
    let markupVersionsHistory = [];
    if (markupVersionsHistoryData) {
      lastMarkupSavedVersion = markupVersionsHistoryData['versions'][markupVersionsHistoryData['versions'].length - 1];
      markupVersionsHistory = markupVersionsHistoryData['versions'];
    }

    this.setState({
      markupText: markupTextLoggerData,
      lastMarkupVersion: lastMarkupSavedVersion,
      markupVersionsHistory: markupVersionsHistory,
      editingStatus: 'InProgress',
      showModalRollbackContent: false
    });
  }

  initSession = () => {
    resetLocalStorageSession();
    this.setState({
      showModalRollbackContent: false,
      editingStatus: 'idle'
    });
  }

  handleEditorChange = (e) => {
    setMarkupTextLogger(e.target.value);
    this.setState({
      editingStatus: 'InProgress',
      markupText: e.target.value
    });
  }

  handleNewMarkupContent = () => {
    this.clearMarkupContent();
    resetMarkupTextLogger();
    resetMarkupVersionsHistory();
    this.resetMarkupVersion();

    this.setState({ editingStatus: 'New' })
  }

  handleClearMarkupContent = () => {
    this.clearMarkupContent();
  }

  handleAddMarkupContentToHistory = () => {
    let newMarkupVersion;

    const [existsmarkupVersionsHistorySaved, markupVersionsHistory] = this.getMarkupVersionsHistorySaved()

    if (existsmarkupVersionsHistorySaved) {
      newMarkupVersion = this.appendNewMarkupContentToHistory(this.state.lastMarkupVersion + 1, markupVersionsHistory)
      // increment the version based on saved version
      this.setState((state) => (
        {
          lastMarkupVersion: state.lastMarkupVersion + 1,
          versionSelectedFromHistory: null
        }
      ))
    } else {
      newMarkupVersion = this.createNewMarkupVersionHistory()
    }

    setMarkupVersionsHistory(newMarkupVersion);
  }

  clearMarkupContent = () => {
    this.setState({ markupText: '' });
  }

  resetMarkupVersion = () => {
    this.setState({
      lastMarkupVersion: 0,
      markupVersionsHistory: []
    });
  }

  getMarkupVersionsHistorySaved = () => {
    let markupVersionsHistory = getMarkupVersionsHistory();

    if (markupVersionsHistory) {
      return [true, markupVersionsHistory]
    }

    return [false, { markupTextLoggers: {}, versions: [] }]
  }

  createNewMarkupVersionHistory = () => {
    const saveDate = new Date();

    let newMarkupVersion = {
      markupSnaphosts: {
        0: {
          markupText: this.state.markupText,
          date: saveDate
        }
      },
      versions: [0]
    }

    let newMarkupVersionsHistory = [...this.state.markupVersionsHistory];
    newMarkupVersionsHistory.push(0);

    this.setState({
      lastSaveDate: saveDate,
      markupVersionsHistory: newMarkupVersionsHistory
    })

    return newMarkupVersion;
  }

  appendNewMarkupContentToHistory = (newVersion, history) => {
    const { markupSnaphosts, versions } = history;

    const saveDate = new Date();

    let newMarkupVersion = {
      markupSnaphosts: {
        ...markupSnaphosts,
        [newVersion]: {
          markupText: this.state.markupText,
          date: saveDate
        }
      },
      versions: [...versions, newVersion]
    }

    let newMarkupVersionsHistory = [...this.state.markupVersionsHistory];
    newMarkupVersionsHistory.push(newVersion);

    this.setState({
      lastSaveDate: saveDate,
      markupVersionsHistory: newMarkupVersionsHistory
    })

    return newMarkupVersion;
  }

  handleMarkupVersionChange = (e) => {
    let versionSelectedFromHistory = e.target.value;
    const versionNumber = versionSelectedFromHistory.substring(8, 99);
    this.restoreMarkupFromHistory(versionNumber);

    this.setState({ versionSelectedFromHistory: versionNumber })
  }


  restoreMarkupFromHistory = (versionNumber) => {
    const markupVersionsHistory = getMarkupVersionsHistory();
    const markupTextFromHistory = markupVersionsHistory.markupSnaphosts[versionNumber].markupText;

    this.setState({ markupText: markupTextFromHistory })
  }

  handleTextSelection = () => {
    // this does not work in Firefox due to its bug
    const getTextSelected = document.onselectionchange = function () {
      return document.getSelection().toString();
    };

    this.setState(
      { textSelected: getTextSelected() }
    )
  }



  render() {

    const {
      screenWidth,
      editingStatus,
      markupText,
      markupVersionsHistory,
      lastMarkupVersion,
      versionSelectedFromHistory,
      showModalRollbackContent
    } = this.state;

    console.log('state - textSelected:', this.state.textSelected)

    const modalRollbackContent = (
      <Modal
        title={'Welcome back...'}
        message={'There is some content saved from the last session. Do you want to restore it?'}>
        <Button type="primary" eventHandler={this.rollbackData}>YES</Button>
        <Button type="secondary" eventHandler={this.initSession}>NO</Button>
      </Modal>
    )


    return (
      <Fragment>
        {(showModalRollbackContent) ? modalRollbackContent : null}
        <Header />
        <Dashboard text={markupText} />
        <div className="container">
          <EditorPanel
            editingStatus={editingStatus}
            markupText={markupText}
            markupVersionsHistory={markupVersionsHistory}
            lastMarkupVersion={lastMarkupVersion}
            versionSelectedFromHistory={versionSelectedFromHistory}
            handleEditorChange={this.handleEditorChange}
            handleTextSelection={this.handleTextSelection}
            handleMarkupVersionChange={this.handleMarkupVersionChange}
          />
          <PreviewPanel rawText={markupText} />
          <Toolbar
            screenWidth={screenWidth}
            editingStatus={editingStatus}
            handleNewMarkupContent={this.handleNewMarkupContent}
            handleAddMarkupContentToHistory={this.handleAddMarkupContentToHistory}
            handleClearMarkupContent={this.handleClearMarkupContent}
          />
        </div>
      </Fragment >
    );

  }

}

const placeholder =
  `# Welcome to my React markup Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default App;


