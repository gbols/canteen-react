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

  // it("should call the login function", () => {
  //   wrapper.setProps({ isLoginError: true });
  // });

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
    const spy = jest.fn();
    wrapper.setProps({
      isLoginError: false,
      login: spy,
      loginRes: {
        token: "token",
        message: "message"
      },
      changeLoginModal: jest.fn()
    });
    window.location.reload = jest.fn();
    wrapper.instance().handleSubmit(e);
    expect(spy).toBeCalled;
  });
});
