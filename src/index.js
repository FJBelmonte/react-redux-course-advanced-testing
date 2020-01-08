import App from "components/App";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducers from "reducers";
import { Provider } from "react-redux";
import createStore from "redux";

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
