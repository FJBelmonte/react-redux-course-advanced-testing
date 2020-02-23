import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import { moxios } from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetched #1" }, { name: "fetched #2" }]
  });
});

afterEach(() => {
  moxios.unistall();
});

it("can fetch a list of coments and display them", () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find(".fetch-comments").simulate("click");
  expect(wrapped.find("li").length).toEqual(500);
});
