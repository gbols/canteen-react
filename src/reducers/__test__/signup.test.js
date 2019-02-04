import * as types from "../../actions/actionTypes";
import signUp, { initialState } from "../signup";

describe("Login Reducer", () => {
  it(`should update state when ${types.SIGNUP_START} is triggered`, () => {
    expect(
      signUp(initialState, {
        type: types.SIGNUP_START
      })
    ).toEqual({ ...initialState, isSignUpLoading: true });
  });

  it(`should update state when ${types.SIGNUP_FAILED} is tirggerd`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      signUp(initialState, {
        type: types.SIGNUP_FAILED,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isSignUpLoading: false, signUpRes: payload, isSignUpError: true }
    });
  });

  it(`should update the state when ${types.SIGNUP_SUCCESS} is triggred`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      signUp(initialState, {
        type: types.SIGNUP_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isSignUpLoading: false, signUpRes: payload, isSignUpSuccess: true }
    });
  });
});
