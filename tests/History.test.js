import { shallow } from "enzyme";
import React from "react";

import { History } from "../src/components/History";

describe("### History Components", () => {
  let wrapper;
  const props = {
    index: 1,
    order: {
      orderid: 1,
      orderat: "cvh hcjbcj",
      info: [{}],
      status: "completed"
    }
  };

  beforeEach(() => {
    wrapper = shallow(<History {...props} />);
  });
  it("should render a team component", () => {
    const container = wrapper.find("li");
    expect(container.length).toEqual(1);
  });
});
