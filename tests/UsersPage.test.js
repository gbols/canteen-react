import React from "react";
import { shallow } from "enzyme";

import { UsersPage } from "../src/components/UsersPage";

describe("### User Page Comoponent", () => {
  let wrapper;
  const props = {
    isloading: false,
    fetchHistory: jest.fn(),
    response: {
      orders: [
        {
          info: [{}]
        }
      ]
    },
    user: {
      user: {
        userid: 1
      }
    }
  };
  beforeEach(() => {
    wrapper = shallow(<UsersPage {...props} />);
  });
  it("should show a loader component", () => {
    wrapper.setState({
      isloading: true
    });
  });
  it("should show a loader component", () => {
    wrapper.setState({ display: [{}] });
  });
});
