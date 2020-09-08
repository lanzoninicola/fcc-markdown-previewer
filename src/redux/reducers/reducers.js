import {
    INIT_TEXTAREA_REF,
    MARKDOWN_TEXT_EDITOR_CHANGE,
    MARKDOWN_TEXT_SELECTION,
} from '../actions/actions';


let initStateOnInitApplication = {
    textAreaRef2: null
};

export const initTextAreaRef = (state = initStateOnInitApplication, action) => {

    switch (action.type) {
        case INIT_TEXTAREA_REF:
            return {
                ...state,
                textAreaRef2: action.payload
            }
        default:
            return state;
    }

};


let initStateOnMarkdownEditorChange = {
    editingStatus: 'idle', //'InProgress',
    markdownText: ''
};

export const changeMarkdownText = (state = initStateOnMarkdownEditorChange, action) => {

    switch (action.type) {
        case MARKDOWN_TEXT_EDITOR_CHANGE:
            return {
                ...state,
                editingStatus: 'InProgress',
                markdownText: action.payload
            }
        default:
            return state;
    }

};

let initStateOnTextSelection = {
    textSelection: null
};

export const textSelection = (state = initStateOnTextSelection, action) => {

    switch (action.type) {
        case MARKDOWN_TEXT_EDITOR_CHANGE:
            return {
                ...state,
                textSelection: action.payload
            }
        default:
            return state;
    }

};