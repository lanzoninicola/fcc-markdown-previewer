import {
    MARKDOWN_TEXT_CONTENT_CHANGE,
    MARKDOWN_TEXT_SELECTION,
    TEXT_FORMATTING_APPLIED_H1,
} from '../actions/actions';


let initStateOfMarkdownFile = {
    editingStatus: 'idle', //'InProgress',
    markdownText: ''
};

export const markdownFile = (state = initStateOfMarkdownFile, action) => {
    switch (action.type) {
        case MARKDOWN_TEXT_CONTENT_CHANGE:
            return {
                ...state,
                editingStatus: 'InProgress',
                markdownText: action.payload
            }
        case TEXT_FORMATTING_APPLIED_H1:
            return {
                ...state,
                markdownText: action.payload
            };
        default:
            return state;
    }
};

let initStateOnTextSelection = {
    textSelection: {
        startSelection: 0,
        endSelection: 0
    }
};

export const textSelection = (state = initStateOnTextSelection, action) => {
    switch (action.type) {
        case MARKDOWN_TEXT_SELECTION:
            return {
                ...state,
                textSelection: action.payload
            };
        default:
            return state;
    }
};