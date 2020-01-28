import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";
import React from "react";

export default function Root(props) {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
}
