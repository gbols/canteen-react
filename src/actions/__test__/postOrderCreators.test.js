import moxios from "moxios";
import postOrderCreators from "../postOrderCreators";
import * as actionTypes from "../actionTypes";

const dispatchFunction = jest.fn();

const url = "https://mygbols.herokuapp.com/api/v1/orders";

describe("Post Order Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it("should return an action when the login start is fired", () => {
    expect(postOrderCreators.postOrderStart()).toEqual({
      type: actionTypes.POST_ORDER_START
    });
  });

  it("should return an action when the login failed action is fired", () => {
    expect(postOrderCreators.postOrderFailed()).toEqual({
      type: actionTypes.POST_ORDER_FAILED
    });
  });

  it("should return an action if fetch article success is fired", () => {
    expect(postOrderCreators.postOrderSuccess()).toEqual({
      type: actionTypes.POST_ORDER_SUCCESS
    });
  });

  it("should call the fetch article start dispatch function", async () => {
    const mockResponse = {
      message: "start the fetch process"
    };

    moxios.stubRequest(url, {
      status: 200,
      response: mockResponse
    });

    await postOrderCreators.postOrder()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: actionTypes.POST_ORDER_START
    });
  });

  it("should call the article failed dispatch function", async () => {
    const mockResponse = {
      messsage: "Something happened with the server"
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await postOrderCreators.postOrder()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
