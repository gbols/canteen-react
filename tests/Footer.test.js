import React from "react";
import { shallow } from "enzyme";

import Footer from "../src/components/Footer";

describe("## Footer Component", () => {
  let wrapper;
  wrapper = shallow(<Footer />);
  it("should render a footer tag", () => {
    const container = wrapper.find("footer");
    expect(container.length).toEqual(1);
  });
});
