import * as types from "../../actions/actionTypes";
import postOrder, { initialState } from "../order";

describe("postOrder Reducer", () => {
  it(`should update state when ${types.POST_ORDER_START} is triggered`, () => {
    expect(
      postOrder(initialState, {
        type: types.POST_ORDER_START
      })
    ).toEqual({ ...initialState, isLoading: true });
  });

  it(`should update state when ${types.POST_ORDER_FAILED} is tirggerd`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      postOrder(initialState, {
        type: types.POST_ORDER_FAILED,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLoading: false, response: payload, error: true }
    });
  });

  it(`should update the state when ${
    types.POST_ORDER_SUCCESS
  } is triggred`, () => {
    const payload = {
      response: {
        data: {
          message: "dvh vn"
        }
      }
    };
    expect(
      postOrder(initialState, {
        type: types.POST_ORDER_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      ...{ isLoading: false, response: payload, success: true }
    });
  });
});
