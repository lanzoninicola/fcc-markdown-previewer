import { combineReducers } from 'redux';
import {
    textSelection,
    markdownFile
} from './reducers';

export const rootReducer = combineReducers({
    markdownFile,
    textSelection
});