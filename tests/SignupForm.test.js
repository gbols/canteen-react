import React from "react";
import { shallow } from "enzyme";

import { SignupForm } from "../src/components/SignupForm";

describe("### Signup Comopnent", () => {
  let wrapper;
  const props = {
    signUp: jest.fn(),
    checkisLoggedInState: jest.fn(),
    changeSignupModal: jest.fn(),
    signUpRes: {
      token: "gfbjvsdkjsv"
    },
    isSignUpLoading: false
  };

  beforeEach(() => {
    wrapper = shallow(<SignupForm {...props} />);
  });

  it("should render a Loader Component", () => {
    wrapper.setProps({ isSignUpLoading: true });
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

  it("Should simulate a submit event on form submission", () => {
    const e = {
      preventDefault: jest.fn()
    };
    wrapper.setProps({ isLoggedInSuccess: true });
    const container = wrapper.find("form");
    container.at(0).simulate("submit");
    expect(wrapper.instance().handleSubmit(e)).toBeCalled;
  });
});
