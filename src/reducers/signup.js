import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  isSignUpLoading: false,
  signUpRes: {},
  isSignUpError: null,
  isSignUpSuccess: null
};

const isSignUpLoading = { isSignUpLoading: true };

const updateSignUpSuccessState = (state, action) => ({
  ...state,
  ...{
    isSignUpLoading: false,
    signUpRes: action.payload,
    isSignUpSuccess: true
  }
});

const updateSignUpFailedState = (state, action) => ({
  ...state,
  ...{ isSignUpLoading: false, signUpRes: action.payload, isSignUpError: true }
});

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
      return { ...state, ...isSignUpLoading };
    case actionTypes.SIGNUP_FAILED:
      return updateSignUpFailedState(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return updateSignUpSuccessState(state, action);
    default:
      return state;
  }
};

export default signUp;
