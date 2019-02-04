import * as types from "../../actions/actionTypes";
import fetchMenu, { initialState } from "../menu";

describe("Fetch Menu Reducer", () => {
  it(`should update state when ${types.FETCH_MENU_START} is triggered`, () => {
    expect(
      fetchMenu(initialState, {
        type: types.FETCH_MENU_START
      })
    ).toEqual({ ...initialState, isLoading: true });
  });

  it(`should update state when ${types.FETCH_MENU_FAILED} is tirggerd`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      fetchMenu(initialState, {
        type: types.FETCH_MENU_FAILED,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLoading: false, response: payload, error: true }
    });
  });

  it(`should update the state when ${
    types.FETCH_MENU_SUCCESS
  } is triggred`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      fetchMenu(initialState, {
        type: types.FETCH_MENU_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLoading: false, response: payload, success: true }
    });
  });
});
