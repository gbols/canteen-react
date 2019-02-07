import React from "react";
import { shallow } from "enzyme";

import LoginNav from "../src/components/LoginNav";

describe("## LoginNav Comopnent", () => {
  let wrapper;
  const props = {
    cartItems: 2,
    handleSignOut: jest.fn(),
    user: {
      user: {
        username: "gbols"
      }
    }
  };
  beforeEach(() => {
    wrapper = shallow(<LoginNav {...props} />);
    jest.spyOn(location, "reload").mockImplementation(() => undefined);
  });
  it("It should render a ul", () => {
    const container = wrapper.find("ul");
    expect(container.length).toEqual(1);
  });
  it("It should simulate a click event", () => {
    const container = wrapper.find("li");
    const e = {
      preventDefault: jest.fn()
    };
    container.at(2).simulate("click");
    expect(wrapper.instance().handleSignOut(e)).toBeCalled;
  });
});
