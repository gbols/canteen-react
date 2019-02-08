import React from "react";
import { shallow } from "enzyme";

import Navbar from "../src/components/Navbar";

describe("## Navbar Component", () => {
  let wrapper;
  const props = {
    user: {
      cartItems: []
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Navbar {...props} />);
  });

  it("should render a loginNav component", () => {
    wrapper.setProps({ user: "gbols" });
  });
});
