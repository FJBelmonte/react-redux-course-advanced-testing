import App from "../App";
import React from "react";
import ReactDOM from "react-dom";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // Look inside the div
  // And checks to see if the CommentBox is in there
  expect(div.innerHTML).toContain("Comment Box");

  ReactDOM.unmountComponentAtNode(div);
});
