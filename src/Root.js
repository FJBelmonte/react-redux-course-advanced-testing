import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";
import React from "react";

export default function Root({ children, initialState = {} }) {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
}
