import { shallow } from "enzyme";
import React from "react";

import { LoginForm } from "../src/components/LoginForm";

describe("## Login Component", () => {
  let wrapper;
  const props = {
    login: jest.fn(),
    isLoggedInSuccess: false,
    isLogLoading: false,
    changeLoginModal: jest.fn(),
    checkisLoggedInState: jest.fn(),
    handleSubmit: jest.fn(),
    loginRes: {
      message: "sucessful"
    }
  };

  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
  });

  it("should render a Loader Component", () => {
    wrapper.setProps({ isLogLoading: true });
  });

  it("Should simulate a click event on the close modal function", () => {
    const container = wrapper.find("span.close");
    container.at(0).simulate("click");
    expect(wrapper.instance().changeLoginModal).toBeCalled;
  });

  it("Should simulate a click event on the close modal function", () => {
    const container = wrapper.find("button.cancelbtn");
    container.at(0).simulate("click");
    expect(wrapper.instance().changeLoginModal).toBeCalled;
  });

  it("Should simulate a submit event on form submission", async () => {
    const e = {
      preventDefault: jest.fn()
    };
    wrapper.setProps({ isLoggedInError: true });
    const container = wrapper.find("form");
    container.at(0).simulate("submit");
    expect(wrapper.instance().handleSubmit(e)).toBeCalled;
  });
});
