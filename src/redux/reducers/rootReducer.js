import { combineReducers } from 'redux';
import {
    initTextAreaRef,
    changeMarkdownText
} from './reducers';


export const rootReducer = combineReducers({
    initTextAreaRef,
    changeMarkdownText
});