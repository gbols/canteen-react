import React from "react";
import { shallow } from "enzyme";

import { Menu } from "../src/components/Menu";

describe("## Navbar Component", () => {
  let wrapper;
  const props = {
    addToOrder: jest.fn(),
    imageurl: "cjvhcsj",
    menutitle: "vdjsj",
    price: 450
  };

  beforeEach(() => {
    wrapper = shallow(<Menu {...props} />);
  });

  it("should render a Menu component", () => {
    const container = wrapper.find("div.food");
    expect(container.length).toEqual(1);
  });

  it("should simulate a click", () => {
    const container = wrapper.find("button.add-to-cart");
    container.simulate("click");
    expect(container.props().addToOrder).toBeCalled;
  });
});
