import { shallow } from "enzyme";
import React from "react";

import {
  CartPage,
  mapDispatchToProps,
  mapStateToProps
} from "../src/components/CartPage";

describe("### Cart Page Comopnent", () => {
  let wrapper;
  const dispatchFn = jest.fn();
  const props = {
    isLoading: true,
    total: true,
    orders: [1, 2]
  };
  beforeEach(() => {
    wrapper = shallow(<CartPage {...props} />);
  });

  it("should render a loader component", () => {
    wrapper.setState({
      isLoading: true
    });
  });

  it("should render a Navbar component", () => {
    const container = wrapper.find("Navbar");
    expect(container.length).toEqual(1);
  });

  it("should render a Navbar component", () => {
    const container = wrapper.find("Footer");
    expect(container.length).toEqual(1);
  });

  it("should render a SignupForm component", () => {
    wrapper.setState({ signupModal: true });
    const container = wrapper.find("SignupForm");
    expect(container.length).toEqual(1);
  });

  it("should render a LoginForm component", () => {
    wrapper.setState({ loginModal: true });
    const container = wrapper.find("LoginForm");
    expect(container.length).toEqual(1);
  });

  it("should render a Navbar component", async () => {
    const e = {
      eventDefault: jest.fn()
    };
    expect(wrapper.instance().handlePost(e)).toBeCalled;
  });

  it("should call the changeLoginMethod", () => {
    wrapper.setState({
      loginModal: false
    });
    wrapper.instance().changeLoginModal();
    expect(wrapper.length).toEqual(1);
  });

  it("should call the changeSignupMethod", () => {
    wrapper.setState({
      signupModal: false
    });
    wrapper.instance().changeSignupModal();
    expect(wrapper.length).toEqual(1);
  });

  it("should dispatch an action", () => {
    expect(typeof mapDispatchToProps(dispatchFn)).toEqual("object");
  });

  it("should dispatch an action", () => {
    const state = {
      postOrder: {},
      login: {},
      signUp: {}
    };
    expect(mapStateToProps(state)).toEqual({
      ...state.postOrder,
      ...state.signUp,
      ...state.login
    });
  });
});
