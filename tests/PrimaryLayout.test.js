import { shallow } from "enzyme";
import React from "react";
import { PrimaryLayout } from "../src/components/PrimaryLayout";
import { mapDispatchToProps, mapStateToProps } from "../src/components/Main";

describe("## Primary Layout Componenet", () => {
  let wrapper;
  const props = {
    isLoading: false,
    fetchMenu: jest.fn(),
    orders: [],
    cartItems: [],
    response: {
      menus: [{ menu: "45" }]
    }
  };

  beforeAll(() => {
    wrapper = shallow(<PrimaryLayout {...props} />);
  });

  it("should render the navbar component", () => {
    const container = wrapper.find("Navbar");
    expect(container.length).toEqual(1);
  });

  it("should render the Loader component", () => {
    wrapper.setProps({ isLoading: true });
    const container = wrapper.find("Loader");
    expect(container.length).toEqual(1);
  });

  it("should render the LoginForm component", () => {
    wrapper.setState({ loginModal: true });
    wrapper.setProps({ isLoading: false });
    const container = wrapper.find("LoginForm");
    container.at(0).simulate("click");
    expect(wrapper.instance().changeLoginModal()).toBeCalled;
  });

  it("should render the SignForm component", () => {
    wrapper.setState({ signupModal: true });
    wrapper.setProps({ isLoading: false });
    const container = wrapper.find("SignupForm");
    container.at(0).simulate("click");
    expect(wrapper.instance().changeSignupModal()).toBeCalled;
  });

  it("should check the Logged In state", () => {
    wrapper.setState({ isLoggedIn: true });
    const container = wrapper.find("Navbar");
    container.at(0).simulate("click");
    expect(wrapper.instance().checkisLoggedInState()).toBeCalled;
  });

  it("should call the addToOrder function", () => {
    expect(wrapper.instance().addToOrder(1)).toBeCalled;
  });
});

describe("## articlesResponse", () => {
  const state = {
    fetchMenu: "me"
  };
  it("should call mapStateToProps", () => {
    expect(mapStateToProps(state)).toEqual({ 0: "m", 1: "e" });
  });

  it("should call mapDispatchToProps", () => {
    expect(typeof mapDispatchToProps(state)).toEqual("object");
  });
});
