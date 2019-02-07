import * as types from "../../actions/actionTypes";
import fetchHistory, { initialState } from "../history";

describe("History Reducer", () => {
  it(`should update state when ${
    types.FETCH_HISTORY_START
  } is triggered`, () => {
    expect(
      fetchHistory(initialState, {
        type: types.FETCH_HISTORY_START
      })
    ).toEqual({ ...initialState, isLoading: true });
  });

  it(`should update state when ${
    types.FETCH_HISTORY_FAILED
  } is tirggerd`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      fetchHistory(initialState, {
        type: types.FETCH_HISTORY_FAILED,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLoading: false, response: payload, error: true }
    });
  });

  it(`should update the state when ${
    types.FETCH_HISTORY_SUCCESS
  } is triggred`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      fetchHistory(initialState, {
        type: types.FETCH_HISTORY_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLoading: false, response: payload, success: true }
    });
  });
});
