import React, { Component } from 'react'
import './PreviewPanel.css'
// import './PreviewRenderDefault.css'
// import './PreviewRenderGithub.css'
import marked from 'marked'

import { connect } from 'react-redux';

const DEFAULT = 'Default';
const GITHUB = 'Github Style'

class PreviewPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            previewRenderStyles: [DEFAULT, GITHUB],
            previewRenderClassName: 'preview-render-default'
        }
    }

    componentDidMount() {
        require('./PreviewRenderDefault.css')
    }

    createmarkdown = (text) => {
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: null,
            pedantic: false,
            gfm: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });


        const markdown = marked(text);

        console.log('PreviewPanel - createMarkdown - markdown', markdown)

        return { __html: markdown };
    }

    handleStyleChange = (e) => {
        let previewRenderClassNameChoosed = '';

        switch (e.target.value) {
            case DEFAULT:
                require('./PreviewRenderDefault.css')
                previewRenderClassNameChoosed = "preview-render-default"
                break;
            case GITHUB:
                require('./PreviewRenderGithub.css')
                previewRenderClassNameChoosed = "preview-render-github"
                break;
            default:
                break;
        }

        this.setState({ previewRenderClassName: previewRenderClassNameChoosed })
    }

    render() {

        const { markdownText } = this.props;
        const { previewRenderStyles, previewRenderClassName } = this.state;

        const stylesOptions = previewRenderStyles.map((previewRenderStyle, i) => {
            return <option key={i}>{previewRenderStyle}</option>
        })

        return (
            <div id="preview-panel" className="fadeInRight">
                <div id="preview-panel-header">
                    <h3>PREVIEW</h3>
                    <div id="preview-panel-header-select">
                        <label htmlFor="markdown-version" id="preview-panel-header-select-label">Style:</label>
                        <select value={this.state.style} onChange={this.handleStyleChange}>
                            {stylesOptions}
                        </select>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={this.createmarkdown(markdownText)} id="preview-render" className={previewRenderClassName} >
                </div>
            </div>
        )
    }
}

const mapState = state => {
    const { markdownText } = state.markdownFile

    return {
        markdownText
    }
}

export default connect(mapState, null)(PreviewPanel);