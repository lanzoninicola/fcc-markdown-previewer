import { combineReducers } from "redux";
import {
  textSelection,
  markdownFile,
  markdownImage,
  markdownLink,
  focusWriting,
} from "./reducers";

export const rootReducer = combineReducers({
  markdownFile,
  textSelection,
  markdownImage,
  markdownLink,
  focusWriting,
});
