import React from "react";
import { shallow } from "enzyme";

import LogoutNav from "../src/components/LogoutNav";

describe("## LoginNav Comopnent", () => {
  let wrapper;
  const props = {
    changeLoginModal: jest.fn(),
    changeSignupModal: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<LogoutNav {...props} />);
    jest.spyOn(location, "reload").mockImplementation(() => undefined);
  });
  it("It should render a ul", () => {
    const container = wrapper.find("ul");
    expect(container.length).toEqual(1);
  });
  it("should simulate the click modal event", () => {
    const container = wrapper.find("a");
    container.at(0).simulate("click");
    expect(wrapper.instance().changeLoginModal).toBeCalled;
  });
  it("should simulate the click modal event", () => {
    const container = wrapper.find("a");
    container.at(1).simulate("click");
    expect(wrapper.instance().changeSignupModal).toBeCalled;
  });
});
