import commentsReducer from "reducers/Comments";
import { combineReducers } from "redux";

export default combineReducers({ comments: commentsReducer });
