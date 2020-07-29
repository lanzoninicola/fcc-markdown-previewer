import React, { Component } from 'react'
import './PreviewPanel.css'
import './PreviewRenderGithub.css'
import marked from 'marked'

class PreviewPanel extends Component {

    createMarkup = (text) => {
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


        const markup = marked(text);
        return { __html: markup };
    }

    render() {

        const { rawText } = this.props;

        return (
            <div id="preview-panel">
                <div id="preview-panel-header">
                    <h3>PREVIEW</h3>
                </div>
                <div dangerouslySetInnerHTML={this.createMarkup(rawText)} id="preview-render" className="preview-render-github" >
                </div>
            </div>
        )
    }
}

export default PreviewPanel;