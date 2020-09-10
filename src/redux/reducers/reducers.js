import {
    MARKDOWN_TEXT_EDITOR_CHANGE,
    MARKDOWN_TEXT_SELECTION,
} from '../actions/actions';


let initStateOnMarkdownEditorChange = {
    editingStatus: 'idle', //'InProgress',
    markdownText: ''
};

export const changeMarkdownText = (state = initStateOnMarkdownEditorChange, action) => {

    console.log(action.type)

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
    textSelection: {
        startSelection: 0,
        endSelection: 0
    }
};

export const textSelection = (state = initStateOnTextSelection, action) => {
    console.log(state, {
        ...state,
        textSelection: action.payload
    });

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
