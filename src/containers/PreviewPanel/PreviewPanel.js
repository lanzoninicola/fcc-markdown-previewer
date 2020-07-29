import React, { Component } from 'react'
import './PreviewPanel.css'
import './PreviewRender.css'
import marked from 'marked'

class PreviewPanel extends Component {

    createMarkup = (text) => {
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
                <div dangerouslySetInnerHTML={this.createMarkup(rawText)} id="preview-render" >
                </div>
            </div>
        )
    }
}

export default PreviewPanel;