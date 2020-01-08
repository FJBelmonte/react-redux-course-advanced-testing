import commentsReducer from "./Comments";
import { combineReducers } from "redux";

export default combineReducers({ comments: commentsReducer });
