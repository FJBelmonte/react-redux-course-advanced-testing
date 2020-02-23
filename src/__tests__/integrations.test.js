import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

let wrapped;

beforeEach(() => {
  moxios.install();
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it("can fetch a list of coments and display them", done => {
  moxios.wait(async () => {
    let request = moxios.requests.mostRecent();
    await request.respondWith({
      status: 200,
      response: [{ name: "fetched #1" }, { name: "fetched #2" }]
    });
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
  });

  wrapped.find(".fetch-comments").simulate("click");
});
