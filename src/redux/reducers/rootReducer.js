import { combineReducers } from "redux";
import { textSelection, markdownFile, markdownImage } from "./reducers";

export const rootReducer = combineReducers({
  markdownFile,
  textSelection,
  markdownImage,
});
