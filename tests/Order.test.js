import { shallow } from "enzyme";
import React from "react";

import Order from "../src/components/Order";

describe("## the Order comopnent", () => {
  let wrapper;
  const props = {
    addToOrder: jest.fn(),
    removeFromOrder: jest.fn(),
    removeCartItem: jest.fn(),
    order: {
      imageurl: "vdjvhjs",
      menutitle: "bvcjbvvk",
      price: 890,
      menuid: 1
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Order {...props} />);
  });

  it("should render the order component", () => {
    const container = wrapper.find("div.food");
    expect(container.length).toEqual(1);
  });
  it("should simulate a click event on the addToOrder", () => {
    const container = wrapper.find("span.num");
    container.at(0).simulate("click");
    expect(wrapper.props().addToOrder).toBeCalled;
  });

  it("should simulate a click event on the removeFromOrder", () => {
    const container = wrapper.find("span.num");
    container.at(1).simulate("click");
    expect(wrapper.props().addToOrder).toBeCalled;
  });

  it("should simulate a click event on the removeFromOrder", () => {
    const container = wrapper.find(".remove-from-cart");
    container.simulate("click");
    expect(wrapper.props().removeCartItem).toBeCalled;
  });
});
