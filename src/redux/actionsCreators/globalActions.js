import { setmarkdownTextLog } from '../../helper/helper';
import {
    MARKDOWN_TEXT_CONTENT_CHANGE,
    MARKDOWN_TEXT_SELECTION,
    TEXT_FORMATTING_APPLIED_H1,
    TEXT_FORMATTING_APPLIED_H2,
    TEXT_FORMATTING_APPLIED_H3,
    TEXT_FORMATTING_APPLIED_BOLD,
    TEXT_FORMATTING_APPLIED_ITALIC,
    TEXT_FORMATTING_APPLIED_STRIKETROUGH,
    TEXT_FORMATTING_APPLIED_CODE,
    TEXT_FORMATTING_APPLIED_BLOCKCODE,
    TEXT_FORMATTING_APPLIED_LINK,
    TEXT_FORMATTING_APPLIED_LIST,
    TEXT_FORMATTING_APPLIED_NUMBERS
} from '../actions/actions';


export const handleEditorChange = (e) => {

    console.log('globalAction - handleEditorChange - e', e.target.value)

    setmarkdownTextLog(e.target.value);

    return {
        type: MARKDOWN_TEXT_CONTENT_CHANGE,
        payload: e.target.value
    }
}

export const handleTextSelection = (text) => {
    let textSelection = {};
    let nextSelectionRange = {
        startSelection: 0,
        endSelection: 0
    };

    let nextStartSelection = text.current.selectionStart
        ? text.current.selectionStart
        : nextSelectionRange.startSelection;
    let nextEndSelection = text.current.selectionEnd
        ? text.current.selectionEnd
        : nextSelectionRange.endSelection;

    nextSelectionRange.startSelection = nextStartSelection;
    nextSelectionRange.endSelection = nextEndSelection;

    return {
        type: MARKDOWN_TEXT_SELECTION,
        payload: { ...textSelection, ...nextSelectionRange }
    };
};


export const setH1 = (toFormat = { markdownText: '', textSelection: { startSelection: 0, endSelection: 0 } }) => {

    const { markdownText, textSelection } = toFormat;

    let textToFormat = [];
    let newMarkdownText = markdownText;

    if (markdownText && textSelection) {

        const { startSelection } = textSelection;

        textToFormat.push(...markdownText.split(""))
        textToFormat.splice(startSelection, 0, "# ");
        newMarkdownText = textToFormat.join("");

        setmarkdownTextLog(textToFormat);
    }

    return {
        type: TEXT_FORMATTING_APPLIED_H1,
        payload: newMarkdownText
    };
}


