import * as types from "../../actions/actionTypes";
import login, { initialState } from "../login";

describe("Login Reducer", () => {
  it(`should update state when ${types.LOGIN_START} is triggered`, () => {
    expect(
      login(initialState, {
        type: types.LOGIN_START
      })
    ).toEqual({ ...initialState, isLogLoading: true });
  });

  it(`should update state when ${types.LOGIN_FAILED} is tirggerd`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      login(initialState, {
        type: types.LOGIN_FAILED,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLogLoading: false, loginRes: payload, isLoginError: true }
    });
  });

  it(`should update the state when ${types.LOGIN_SUCCESS} is triggred`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      login(initialState, {
        type: types.LOGIN_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLogLoading: false, loginRes: payload, isLoginSuccess: true }
    });
  });
});
