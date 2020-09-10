import { setmarkdownTextLog } from '../../helper/helper';
import {
    MARKDOWN_TEXT_EDITOR_CHANGE,
    MARKDOWN_TEXT_SELECTION
} from '../actions/actions';


export const handleEditorChange = (e) => {

    console.log('globalAction - handleEditorChange - e', e.target.value)

    setmarkdownTextLog(e.target.value);

    return {
        type: MARKDOWN_TEXT_EDITOR_CHANGE,
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


