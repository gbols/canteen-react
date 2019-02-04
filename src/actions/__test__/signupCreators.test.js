import moxios from "moxios";
import signupCreators from "../signupCreators";
import * as actionTypes from "../actionTypes";

const dispatchFunction = jest.fn();

const url = "https://mygbols.herokuapp.com/api/v1/auth/signup";

describe("SignUp Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it("should return an action when the signup start is fired", () => {
    expect(signupCreators.signUpStart()).toEqual({
      type: actionTypes.SIGNUP_START
    });
  });

  it("should return an action when the signup failed action is fired", () => {
    expect(signupCreators.signUpFailed()).toEqual({
      type: actionTypes.SIGNUP_FAILED
    });
  });

  it("should return an action when signup success is fired", () => {
    expect(signupCreators.signUpSuccess()).toEqual({
      type: actionTypes.SIGNUP_SUCCESS
    });
  });

  it("should call the signup start dispatch function", async () => {
    const mockResponse = {
      message: "start the fetch process"
    };

    moxios.stubRequest(url, {
      status: 200,
      response: mockResponse
    });

    await signupCreators.signUp()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: actionTypes.SIGNUP_START
    });
  });

  it("should call the signup dispatch function", async () => {
    const mockResponse = {
      messsage: "Something happened with the server"
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await signupCreators.signUp()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
