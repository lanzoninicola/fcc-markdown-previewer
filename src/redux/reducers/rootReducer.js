import { combineReducers } from 'redux';
import {
    textSelection,
    changeMarkdownText
} from './reducers';

export const rootReducer = combineReducers({
    changeMarkdownText,
    textSelection
});