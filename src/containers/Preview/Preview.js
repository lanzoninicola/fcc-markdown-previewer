import React, { Component } from 'react'
import './Preview.css'
import marked from 'marked'

class Preview extends Component {

    createMarkup = (text) => {
        const markup = marked(text);
        return { __html: markup };
    }

    render() {

        const { rawText } = this.props;

        return (
            <div id="previewSection">
                <h3>PREVIEW</h3>
                <div dangerouslySetInnerHTML={this.createMarkup(rawText)} id="preview" >
                </div>
            </div>
        )
    }
}

export default Preview;