import { combineReducers } from "redux";
import {
  markdownStore,
  textSelection,
  markdownFile,
  markdownImage,
  markdownLink,
} from "./reducers";

export const rootReducer = combineReducers({
  markdownStore,
  markdownFile,
  textSelection,
  markdownImage,
  markdownLink,
});
