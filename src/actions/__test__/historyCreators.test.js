import moxios from "moxios";
import historyCreators from "../historyCreators";
import * as actionTypes from "../actionTypes";

const dispatchFunction = jest.fn();

const userid = undefined;
const url = `https://mygbols.herokuapp.com/api/v1/users/${userid}/orders`;

describe("User History Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it("should return an action when the login start is fired", () => {
    expect(historyCreators.fetchHistoryStart()).toEqual({
      type: actionTypes.FETCH_HISTORY_START
    });
  });

  it("should return an action when the login failed action is fired", () => {
    expect(historyCreators.fetchHistoryFailed()).toEqual({
      type: actionTypes.FETCH_HISTORY_FAILED
    });
  });

  it("should return an action if fetch article success is fired", () => {
    expect(historyCreators.fetchHistorySuccess()).toEqual({
      type: actionTypes.FETCH_HISTORY_SUCCESS
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

    await historyCreators.fetchHistory()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: actionTypes.FETCH_HISTORY_START
    });
  });

  it("should call the article failed dispatch function", async () => {
    const mockResponse = {
      messsage: "Something happened with the server"
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await historyCreators.fetchHistory()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
