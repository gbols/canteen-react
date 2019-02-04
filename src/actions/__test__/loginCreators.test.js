import moxios from "moxios";
import loginCreators from "../loginCreators";
import * as actionTypes from "../actionTypes";

const dispatchFunction = jest.fn();

const url = "https://mygbols.herokuapp.com/api/v1/auth/login";

describe("Login Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it("should return an action when the login start is fired", () => {
    expect(loginCreators.loginStart()).toEqual({
      type: actionTypes.LOGIN_START
    });
  });

  it("should return an action when the login failed action is fired", () => {
    expect(loginCreators.loginFailed()).toEqual({
      type: actionTypes.LOGIN_FAILED
    });
  });

  it("should return an action if fetch article success is fired", () => {
    expect(loginCreators.loginSuccess()).toEqual({
      type: actionTypes.LOGIN_SUCCESS
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

    await loginCreators.login()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: actionTypes.LOGIN_START
    });
  });

  it("should call the article failed dispatch function", async () => {
    const mockResponse = {
      messsage: "Something happened with the server"
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await loginCreators.login()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
