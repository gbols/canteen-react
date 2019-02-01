import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  isLogLoading: false,
  loginRes: {},
  isLoginError: null,
  isLoginSuccess: null
};

const isLoginLoading = { isLogLoading: true };

const updateLoginSuccessState = (state, action) => ({
  ...state,
  ...{ isLogLoading: false, loginRes: action.payload, isLoginSuccess: true }
});

const updateLoginFailedState = (state, action) => ({
  ...state,
  ...{ isLogLoading: false, loginRes: action.payload, isLoginError: true }
});

const login = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, ...isLoginLoading };
    case actionTypes.LOGIN_FAILED:
      return updateLoginFailedState(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return updateLoginSuccessState(state, action);
    default:
      return state;
  }
};

export default login;
