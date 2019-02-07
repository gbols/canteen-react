import { shallow } from "enzyme";
import React from "react";

import { CartPage } from "../src/components/CartPage";

describe("### Cart Page Comopnent", () => {
  let wrapper;
  const props = {
    isLoading: false
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
});
