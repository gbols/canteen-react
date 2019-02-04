import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  isLoading: false,
  response: {},
  error: null,
  success: null
};

const isMenuLoading = { isLoading: true };

const updateFetchMenuSuccessState = (state, action) => ({
  ...state,
  ...{ isLoading: false, response: action.payload, success: true }
});

const updateFetchMenuFailedState = (state, action) => ({
  ...state,
  ...{ isLoading: false, response: action.payload, error: true }
});

const fetchMenu = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MENU_START:
      return { ...state, ...isMenuLoading };
    case actionTypes.FETCH_MENU_FAILED:
      return updateFetchMenuFailedState(state, action);
    case actionTypes.FETCH_MENU_SUCCESS:
      return updateFetchMenuSuccessState(state, action);
    default:
      return state;
  }
};

export default fetchMenu;
