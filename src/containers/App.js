import React, { Component, Fragment } from 'react';
import './App.css';
import PreviewPanel from './PreviewPanel/PreviewPanel';
import EditorPanel from './EditorPanel/EditorPanel';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import Toolbar from '../components/Toolbar/Toolbar';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form'
import {
  getmarkdownTextLogger,
  getmarkdownVersionsHistory,
  setmarkdownTextLogger,
  setmarkdownVersionsHistory,
  resetmarkdownTextLogger,
  resetmarkdownVersionsHistory,
  resetLocalStorageSession
} from '../helper/helper'


// manage with a modal rollbackData after closed or crashed see: this.rollbackData
// pressing new and content in markdown snapashot fire and alert
// pressing CLEAR and content in markdown snapashot fire and alert
// NOTIFICATION BACKGROUND
// background: rgb(255,255,255);
// background: linear-gradient(45deg, rgba(255,255,255,0) 44%, rgba(10,131,136,1) 76%);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screenWidth: 0,
      editingStatus: 'idle',
      markdownText: placeholder,
      markdownImageDescription: '',
      markdownImageURL: '',
      lastmarkdownVersion: 0,
      markdownVersionsHistory: [],
      versionSelectedFromHistory: 0,

      showModalRollbackContent: false,
      showFormInsertImage: false,

      textSelection: {
        // textSelected: '',
        startSelection: 0,
        endSelection: 0
      }
    }

    this.textAreaRef = React.createRef();

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
    const markdownTextLogger = getmarkdownTextLogger();
    const markdownVersionsHistory = getmarkdownVersionsHistory();

    return ((markdownTextLogger && markdownTextLogger.length > 0) || (markdownVersionsHistory));
  }

  rollbackData = () => {
    const markdownTextLoggerData = getmarkdownTextLogger();
    const markdownVersionsHistoryData = getmarkdownVersionsHistory();

    let lastmarkdownSavedVersion = 0;
    let markdownVersionsHistory = [];
    if (markdownVersionsHistoryData) {
      lastmarkdownSavedVersion = markdownVersionsHistoryData['versions'][markdownVersionsHistoryData['versions'].length - 1];
      markdownVersionsHistory = markdownVersionsHistoryData['versions'];
    }

    this.setState({
      markdownText: markdownTextLoggerData,
      lastmarkdownVersion: lastmarkdownSavedVersion,
      markdownVersionsHistory: markdownVersionsHistory,
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
    setmarkdownTextLogger(e.target.value);
    this.setState({
      editingStatus: 'InProgress',
      markdownText: e.target.value
    });
  }

  handleNewmarkdownContent = () => {
    this.clearmarkdownContent();
    resetmarkdownTextLogger();
    resetmarkdownVersionsHistory();
    this.resetmarkdownVersion();

    this.setState({ editingStatus: 'New' })
  }

  handleClearmarkdownContent = () => {
    this.clearmarkdownContent();
  }

  handleAddmarkdownContentToHistory = () => {
    let newmarkdownVersion;

    const [existsmarkdownVersionsHistorySaved, markdownVersionsHistory] = this.getmarkdownVersionsHistorySaved()

    if (existsmarkdownVersionsHistorySaved) {
      newmarkdownVersion = this.appendNewmarkdownContentToHistory(this.state.lastmarkdownVersion + 1, markdownVersionsHistory)
      // increment the version based on saved version
      this.setState((state) => (
        {
          lastmarkdownVersion: state.lastmarkdownVersion + 1,
          versionSelectedFromHistory: null
        }
      ))
    } else {
      newmarkdownVersion = this.createNewmarkdownVersionHistory()
    }

    setmarkdownVersionsHistory(newmarkdownVersion);
  }

  clearmarkdownContent = () => {
    this.setState({ markdownText: '' });
  }

  resetmarkdownVersion = () => {
    this.setState({
      lastmarkdownVersion: 0,
      markdownVersionsHistory: []
    });
  }

  getmarkdownVersionsHistorySaved = () => {
    let markdownVersionsHistory = getmarkdownVersionsHistory();

    if (markdownVersionsHistory) {
      return [true, markdownVersionsHistory]
    }

    return [false, { markdownTextLoggers: {}, versions: [] }]
  }

  createNewmarkdownVersionHistory = () => {
    const saveDate = new Date();

    let newmarkdownVersion = {
      markdownSnaphosts: {
        0: {
          markdownText: this.state.markdownText,
          date: saveDate
        }
      },
      versions: [0]
    }

    let newmarkdownVersionsHistory = [...this.state.markdownVersionsHistory];
    newmarkdownVersionsHistory.push(0);

    this.setState({
      lastSaveDate: saveDate,
      markdownVersionsHistory: newmarkdownVersionsHistory
    })

    return newmarkdownVersion;
  }

  appendNewmarkdownContentToHistory = (newVersion, history) => {
    const { markdownSnaphosts, versions } = history;

    const saveDate = new Date();

    let newmarkdownVersion = {
      markdownSnaphosts: {
        ...markdownSnaphosts,
        [newVersion]: {
          markdownText: this.state.markdownText,
          date: saveDate
        }
      },
      versions: [...versions, newVersion]
    }

    let newmarkdownVersionsHistory = [...this.state.markdownVersionsHistory];
    newmarkdownVersionsHistory.push(newVersion);

    this.setState({
      lastSaveDate: saveDate,
      markdownVersionsHistory: newmarkdownVersionsHistory
    })

    return newmarkdownVersion;
  }

  handlemarkdownVersionChange = (e) => {
    let versionSelectedFromHistory = e.target.value;
    const versionNumber = versionSelectedFromHistory.substring(8, 99);
    this.restoremarkdownFromHistory(versionNumber);

    this.setState({ versionSelectedFromHistory: versionNumber })
  }


  restoremarkdownFromHistory = (versionNumber) => {
    const markdownVersionsHistory = getmarkdownVersionsHistory();
    const markdownTextFromHistory = markdownVersionsHistory.markdownSnaphosts[versionNumber].markdownText;

    this.setState({ markdownText: markdownTextFromHistory })
  }

  handleTextSelection = () => {
    const { textSelection, markdownText } = this.state;

    let newTextSelection = { ...textSelection };

    let startSelection = this.textAreaRef.current.selectionStart;
    let endSelection = this.textAreaRef.current.selectionEnd;

    if (markdownText[startSelection] === " ") { startSelection = startSelection + 1 }
    if (markdownText[endSelection - 1] === " ") { endSelection = endSelection - 1 }

    newTextSelection.startSelection = startSelection;
    newTextSelection.endSelection = endSelection;

    this.setState(
      { textSelection: newTextSelection }
    )
  }

  handleTextFormatting = (formattingType) => {
    const { textSelection, markdownText } = this.state;
    let textToFormat = [];
    textToFormat.push(...markdownText.split(""))
    let markdownTextPostFormatting = '';

    console.log('handleTextFormatting', textSelection)

    if (this.someTextHasBeenHighlited()) {
      switch (formattingType) {
        case 'H1':
          markdownTextPostFormatting = this.setH1(textToFormat);
          break;
        case 'H2':
          markdownTextPostFormatting = this.setH2(textToFormat);
          break;
        case 'H3':
          markdownTextPostFormatting = this.setH3(textToFormat);
          break;
        case 'BOLD':
          markdownTextPostFormatting = this.setBold(textToFormat);
          break;
        case 'ITALIC':
          markdownTextPostFormatting = this.setItalic(textToFormat);
          break;
        case 'STRIKETROUGH':
          markdownTextPostFormatting = this.setStrikeThrough(textToFormat);
          break;
        case 'CODE':
          markdownTextPostFormatting = this.setCode(textToFormat);
          break;
        case 'BLOCKCODE':
          markdownTextPostFormatting = this.setBlockCode(textToFormat);
          break;
        case 'LINK':
          markdownTextPostFormatting = this.setLink(textToFormat);
          break;
        case 'LIST':
          markdownTextPostFormatting = this.setList(textToFormat);
          break;
        case 'NUMBERS':
          markdownTextPostFormatting = this.setNumbers(textToFormat);
          break;
        default:
          break;
      }
    }

    switch (formattingType) {
      case 'TABLE':
        markdownTextPostFormatting = this.setTable(textToFormat);
        break;
      default:
        break;
    }

    setmarkdownTextLogger(markdownTextPostFormatting);

    this.setState(
      { markdownText: markdownTextPostFormatting }
    )
  }


  someTextHasBeenHighlited = () => {
    const { textSelection } = this.state;
    return textSelection.startSelection !== textSelection.endSelection
  }


  setH1 = (text) => {
    const { startSelection } = this.state.textSelection;
    text.splice(startSelection, 0, "# ");
    return text.join("");
  }

  setH2 = (text) => {
    const { startSelection } = this.state.textSelection;
    text.splice(startSelection, 0, "## ");
    return text.join("");
  }

  setH3 = (text) => {
    const { startSelection } = this.state.textSelection;
    text.splice(startSelection, 0, "### ");
    return text.join("");
  }

  setBold = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "**");
    text.splice(startSelection, 0, "**");
    return text.join("");
  }

  setItalic = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "_");
    text.splice(startSelection, 0, "_");
    return text.join("");
  }

  setStrikeThrough = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "~~");
    text.splice(startSelection, 0, "~~");
    return text.join("");
  }

  setCode = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "`");
    text.splice(startSelection, 0, "`");
    return text.join("");
  }

  setBlockCode = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "```");
    text.splice(startSelection, 0, "```");
    return text.join("");
  }

  setLink = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, ")");
    text.splice(startSelection, 0, "[links](");
    return text.join("");
  }

  setList = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "");
    text.splice(startSelection, 0, "- ");
    return text.join("");
  }

  setNumbers = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;
    text.splice(endSelection, 0, "");
    text.splice(startSelection, 0, "1. ");
    return text.join("");
  }

  handleInsertImage = () => {
    this.setState({ showFormInsertImage: true })
  }

  setImage = () => {
    const { markdownText } = this.state;
    const { startSelection, endSelection } = this.state.textSelection;

    let textToFormat = [];
    textToFormat.push(...markdownText.split(""))
    let markdownTextPostFormatting = '';

    let imagemarkdownText = `![${this.state.markdownImageDescription}](${this.state.markdownImageURL})`;

    textToFormat.splice(endSelection, 0, "");
    textToFormat.splice(startSelection, 0, imagemarkdownText);
    markdownTextPostFormatting = textToFormat.join("");

    setmarkdownTextLogger(markdownTextPostFormatting);

    this.setState(
      {
        markdownText: markdownTextPostFormatting,
        showFormInsertImage: false
      }
    )
  }

  setTable = (text) => {
    const { startSelection, endSelection } = this.state.textSelection;

    const tablemarkdownText = "Header1 | Header2 | Header3 \r ------------ | ------------- | ------------- \r Cell(1:1) | Cell(1:2) | Cell(1:3) \r Cell(2:1) | Cell(2:2) | Cell(2:3) \r"

    text.splice(endSelection, 0, "");
    text.splice(startSelection, 0, tablemarkdownText);
    return text.join("");
  }

  handleInputImageDescription = (e) => {
    this.setState({ markdownImageDescription: e.target.value })
  }

  handleInputImageURL = (e) => {
    this.setState({ markdownImageURL: e.target.value })
  }

  render() {

    const {
      screenWidth,
      editingStatus,
      markdownText,
      markdownVersionsHistory,
      lastmarkdownVersion,
      versionSelectedFromHistory,
      showModalRollbackContent,
      showFormInsertImage,
      markdownImageDescription,
      markdownImageURL
    } = this.state;

    const modalRollbackContent = (
      <Modal
        title={'Welcome back...'}
        message={'There is some content saved from the last session. Do you want to restore it?'}>
        <Button type="primary" eventHandler={this.rollbackData}>YES</Button>
        <Button type="secondary" eventHandler={this.initSession}>NO</Button>
      </Modal>
    )

    const formInsertImage = (
      <Form
        title={'Insert the following information:'}
        inputs={[
          {
            value: markdownImageDescription,
            placeholder: "Type a description",
            label: "Description",
            onChangeEventHandler: this.handleInputImageDescription,
            required: true
          },
          {
            value: markdownImageURL,
            placeholder: "Paste the image URL",
            label: "Image URL",
            onChangeEventHandler: this.handleInputImageURL,
            required: true
          }
        ]}
      >,
        <Button type="primary" eventHandler={this.setImage}>OK</Button>
      </Form >
    )

    return (
      <Fragment>
        {showFormInsertImage ? formInsertImage : null}
        {showModalRollbackContent ? modalRollbackContent : null}
        <Header />
        <div className="container" style={{ flexDirection: (screenWidth <= 1366) ? "column" : "row" }}>
          <Dashboard text={markdownText} />
          <Toolbar
            screenWidth={screenWidth}
            editingStatus={editingStatus}
            handleNewmarkdownContent={this.handleNewmarkdownContent}
            handleAddmarkdownContentToHistory={this.handleAddmarkdownContentToHistory}
            handleClearmarkdownContent={this.handleClearmarkdownContent}
            handleTextFormatting={(formattingType) => this.handleTextFormatting(formattingType)}
            handleInsertImage={this.handleInsertImage}
          />
        </div>
        <div className="container" style={{ flexDirection: (screenWidth < 950) ? "column" : "row" }}>
          <EditorPanel
            editingStatus={editingStatus}
            markdownText={markdownText}
            markdownVersionsHistory={markdownVersionsHistory}
            lastmarkdownVersion={lastmarkdownVersion}
            versionSelectedFromHistory={versionSelectedFromHistory}
            handleEditorChange={this.handleEditorChange}
            handleTextSelection={this.handleTextSelection}
            handlemarkdownVersionChange={this.handlemarkdownVersionChange}
            textAreaRef={this.textAreaRef}
          />
          <PreviewPanel rawText={markdownText} />
        </div>
      </Fragment >
    );

  }

}

const placeholder =
  `# Welcome to my React markdown Previewer!

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


