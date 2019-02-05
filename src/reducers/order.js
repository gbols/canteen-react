import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  isLoading: false,
  response: {},
  error: null,
  success: null
};

const isLoading = { isLoading: true };

const updatePostOrderSuccessState = (state, action) => ({
  ...state,
  ...{ isLoading: false, response: action.payload, success: true }
});

const updatePostOrderFailedState = (state, action) => ({
  ...state,
  ...{ isLoading: false, response: action.payload, error: true }
});

const postOrder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_ORDER_START:
      return { ...state, ...isLoading };
    case actionTypes.POST_ORDER_FAILED:
      return updatePostOrderFailedState(state, action);
    case actionTypes.POST_ORDER_SUCCESS:
      return updatePostOrderSuccessState(state, action);
    default:
      return state;
  }
};

export default postOrder;
