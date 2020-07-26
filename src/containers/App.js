import React, { Component, Fragment } from 'react';
import './App.css';
import PreviewPanel from './PreviewPanel/PreviewPanel'
import EditorPanel from './EditorPanel/EditorPanel'
import Header from '../components/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'

// manage with a modal rollbackData after closed or crashed see: this.rollbackData
// pressing new and content in markup snapashot fire and alert
// pressing CLEAR and content in markup snapashot fire and alert

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markupText: placeholder,
      lastMarkupVersion: 0,
      lastSaveDate: null,
      markupVersionsHistory: [],

      versionSelectedFromHistory: ''
    }
  }

  componentDidMount() {
    this.rollbackData()
  }

  rollbackData = () => {
    const markupTextLogger = localStorage.getItem('markupTextLogger');
    if (markupTextLogger && markupTextLogger.length > 0) {
      this.setState({ text: markupTextLogger });
    }

    let markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));

    if (markupVersionsHistory) {
      let lastMarkupSavedVersion = markupVersionsHistory['versions'][markupVersionsHistory['versions'].length - 1];
      this.setState({ lastMarkupVersion: lastMarkupSavedVersion });
    }
  }

  handleEditorChange = (e) => {
    localStorage.setItem('markupTextLogger', e.target.value)
    this.setState({ markupText: e.target.value });
  }

  handleNewMarkupContent = () => {
    this.clearMarkupContent();
    this.resetMarkupTextLogger();
    this.resetMarkupHistory();
    this.resetMarkupVersion();
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

    localStorage.setItem('markupVersionsHistory', JSON.stringify(newMarkupVersion))
  }

  clearMarkupContent = () => {
    this.setState({ markupText: '' });
  }

  resetMarkupTextLogger = () => {
    localStorage.removeItem('markupTextLogger')
  }

  resetMarkupHistory = () => {
    localStorage.removeItem('markupVersionsHistory')
  }

  resetMarkupVersion = () => {
    this.setState({ lastMarkupVersion: 0 });
  }

  getMarkupVersionsHistorySaved = () => {
    let markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));

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

  removeMarkupVersionsHistory = () => {
    localStorage.removeItem('markupVersionsHistory')
  }

  removeMarkupTextLogger = () => {
    localStorage.removeItem('markupTextLogger')
  }

  handleMarkupVersionChange = (e) => {
    let versionSelectedFromHistory = e.target.value;
    const versionNumber = versionSelectedFromHistory.substring(8, 99);
    this.restoreMarkupFromHistory(versionNumber);

    this.setState({ versionSelectedFromHistory: versionNumber })
  }


  restoreMarkupFromHistory = (versionNumber) => {
    const markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));
    const markupTextFromHistory = markupVersionsHistory.markupSnaphosts[versionNumber].markupText;

    this.setState({ markupText: markupTextFromHistory })
  }

  render() {

    const {
      markupText,
      markupVersionsHistory,
      lastMarkupVersion,
      versionSelectedFromHistory
    } = this.state;

    console.log('lastMarkupVersion', lastMarkupVersion)
    return (
      <Fragment>
        <Header />
        <Dashboard text={markupText} />
        <div className="container">
          <EditorPanel
            markupText={markupText}
            handleEditorChange={this.handleEditorChange}
            markupVersionsHistory={markupVersionsHistory}
            lastMarkupVersion={lastMarkupVersion}
            versionSelectedFromHistory={versionSelectedFromHistory}
            handleNewMarkupContent={this.handleNewMarkupContent}
            handleAddMarkupContentToHistory={this.handleAddMarkupContentToHistory}
            handleClearMarkupContent={this.handleClearMarkupContent}
            handleMarkupVersionChange={this.handleMarkupVersionChange}
          />
          <PreviewPanel rawText={markupText} />
        </div>
      </Fragment>
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


