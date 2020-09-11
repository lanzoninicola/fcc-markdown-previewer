import { combineReducers } from "redux";
import {
  textSelection,
  markdownFile,
  markdownImage,
  markdownLink,
} from "./reducers";

export const rootReducer = combineReducers({
  markdownFile,
  textSelection,
  markdownImage,
  markdownLink,
});
