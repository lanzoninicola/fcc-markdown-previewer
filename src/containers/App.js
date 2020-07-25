import React, { Component, Fragment } from 'react';
import './App.css';
import Preview from './Preview/Preview'
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
    const markupSnaphost = localStorage.getItem('markupSnaphost');
    if (markupSnaphost && markupSnaphost.length > 0) {
      this.setState({ text: markupSnaphost });
    }

    let markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));

    if (markupVersionsHistory) {
      let lastMarkupSavedVersion = markupVersionsHistory['versions'][markupVersionsHistory['versions'].length - 1];
      this.setState({ lastMarkupVersion: lastMarkupSavedVersion });
    }
  }

  handleEditorChange = (e) => {
    localStorage.setItem('markupSnaphost', e.target.value)
    this.setState({ markupText: e.target.value });
  }

  handleNewMarkupContent = () => {
    this.createNewMarkupSnapshot();
    this.clearMarkupContent();
  }

  handleClearMarkupContent = () => {
    this.clearMarkupContent();
  }

  handleNewMarkupVersionHistory = () => {
    let newMarkupVersion;

    const [existsmarkupVersionsHistorySaved, markupVersionsHistory] = this.getMarkupVersionsHistorySaved()

    if (existsmarkupVersionsHistorySaved) {
      newMarkupVersion = this.appendNewMarkupVersionHistory(this.state.lastMarkupVersion + 1, markupVersionsHistory)

      // increment the version based on saved version
      this.setState((state) => (
        {
          lastMarkupVersion: state.lastMarkupVersion + 1,
          versionSelectedFromHistory: 0
        }

      ))

    } else {
      newMarkupVersion = this.createNewMarkupVersionHistory()
    }

    localStorage.setItem('markupVersionsHistory', JSON.stringify(newMarkupVersion))

  }

  createNewMarkupSnapshot = () => {
    localStorage.setItem('markupSnaphost', '')
  }

  clearMarkupContent = () => {
    this.setState({ markupText: '' });
    this.createNewMarkupSnapshot();
  }


  getMarkupVersionsHistorySaved = () => {
    let markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));

    if (markupVersionsHistory) {
      return [true, markupVersionsHistory]
    }

    return [false, { markupSnaphosts: {}, versions: [] }]
  }

  createNewMarkupVersionHistory = () => {
    const saveDate = new Date();

    let newMarkupVersion = {
      markupSnaphosts: {
        0: {
          markup: this.state.markupText,
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

  appendNewMarkupVersionHistory = (newVersion, history) => {
    const { markupSnaphosts, versions } = history;

    const saveDate = new Date();

    let newMarkupVersion = {
      markupSnaphosts: {
        ...markupSnaphosts,
        [newVersion]: {
          markup: this.state.markupText,
          date: saveDate
        }
      },
      versions: [...versions, newVersion]
    }

    let newMarkupVersionsHistory = [...this.state.markupVersionsHistory];
    newMarkupVersionsHistory.push(newVersion);

    console.log('appendNewMarkupVersionHistory', newMarkupVersionsHistory)

    this.setState({
      lastSaveDate: saveDate,
      markupVersionsHistory: newMarkupVersionsHistory
    })

    return newMarkupVersion;
  }


  removeMarkupVersionsHistory = () => {
    localStorage.removeItem('markupVersionsHistory')
  }

  removeMarkupSnapshot = () => {
    localStorage.removeItem('markupSnaphost')
  }

  handleMarkupVersionChange = (e) => {
    let versionSelectedFromHistory = e.target.value;
    const versionNumber = versionSelectedFromHistory.substring(8, 99);
    this.restoreMarkupFromHistory(versionNumber);

    this.setState({ versionSelectedFromHistory: versionNumber })
  }


  restoreMarkupFromHistory = (versionNumber) => {
    const markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));
    const markupTextFromHistory = markupVersionsHistory.markupSnaphosts[versionNumber].markup;

    this.setState({ markupText: markupTextFromHistory })
  }

  render() {

    const {
      markupText,
      markupVersionsHistory,
      lastMarkupVersion,
      versionSelectedFromHistory
    } = this.state;

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
            handleNewMarkupVersionHistory={this.handleNewMarkupVersionHistory}
            handleClearMarkupContent={this.handleClearMarkupContent}
            handleMarkupVersionChange={this.handleMarkupVersionChange}
          />
          <Preview rawText={markupText} />
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


