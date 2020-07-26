import React, { Component } from 'react'
import './PreviewPanel.css'
import marked from 'marked'

class PreviewPanel extends Component {

    createMarkup = (text) => {
        const markup = marked(text);
        return { __html: markup };
    }

    render() {

        const { rawText } = this.props;

        return (
            <div id="previewSection">
                <div id="previewSection-toolbar">
                    <h3>PREVIEW</h3>
                </div>
                <div dangerouslySetInnerHTML={this.createMarkup(rawText)} id="preview" >
                </div>
            </div>
        )
    }
}

export default PreviewPanel;