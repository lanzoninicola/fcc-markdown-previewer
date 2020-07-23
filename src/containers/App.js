import React, { Component, Fragment } from 'react';
import './App.css';
import Preview from './Preview/Preview'
import Editor from '../components/Editor/Editor'
import Header from '../components/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: placeholder,
      lastMarkupVersion: 0
    }
  }

  componentDidMount() {
    this.initData()

    console.log(this.state.lastMarkupVersion)

  }

  handleEditorChange = (e) => {
    localStorage.setItem('markupSnaphost', e.target.value)
    this.setState({ text: e.target.value });
  }

  initData = () => {
    const markupSnaphost = localStorage.getItem('markupSnaphost');
    if (markupSnaphost && markupSnaphost.length > 0) {
      this.setState({ text: markupSnaphost });
    }

    let markupVersions = JSON.parse(localStorage.getItem('markupVersions'));

    if (markupVersions) {
      let lastMarkupSavedVersion = markupVersions['versions'][markupVersions['versions'].length - 1];
      this.setState({ lastMarkupVersion: lastMarkupSavedVersion });
    }
  }

  storeMarkupVersionHistory = () => {
    let newMarkupVersion;

    const [existsMarkupVersionsSaved, markupVersionsHistory] = this.getMarkupVersionsHistorySaved()

    if (existsMarkupVersionsSaved) {
      newMarkupVersion = this.appendNewMarkupVersion(this.state.lastMarkupVersion + 1, markupVersionsHistory)

      // increment the version based on saved version
      this.setState((state) => (
        { lastMarkupVersion: state.lastMarkupVersion + 1 }
      ))

    } else {
      newMarkupVersion = this.createNewMarkupVersion()
    }

    localStorage.setItem('markupVersionsHistory', JSON.stringify(newMarkupVersion))

  }

  getMarkupVersionsHistorySaved = () => {
    let markupVersionsHistory = JSON.parse(localStorage.getItem('markupVersionsHistory'));

    if (markupVersionsHistory) {
      return [true, markupVersionsHistory]
    }

    return [false, { markupSnaphosts: {}, versions: [] }]
  }

  createNewMarkupVersion = () => {
    return {
      markupSnaphosts: {
        0: {
          markup: this.state.text,
          date: new Date()
        }
      },
      versions: [0]
    }
  }

  appendNewMarkupVersion = (newVersion, history) => {
    const { markupSnaphosts, versions } = history;

    return {
      markupSnaphosts: {
        ...markupSnaphosts,
        [newVersion]: {
          markup: this.state.text,
          date: new Date()
        }
      },
      versions: [...versions, newVersion]
    }
  }

  removeMarkupVersionsHistory = () => {
    localStorage.removeItem('markupVersionsHistory')
  }

  removeMarkupSnapshot = () => {
    localStorage.removeItem('markupSnaphost')
  }


  render() {
    const { text } = this.state;

    return (
      <Fragment>
        <Header
          storeMarkupVersionHistory={this.storeMarkupVersionHistory} />
        <Dashboard text={text} />
        <div className="container">
          <Editor
            handleEditorChange={this.handleEditorChange}
            rawText={text} />
          <Preview rawText={text} />
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


