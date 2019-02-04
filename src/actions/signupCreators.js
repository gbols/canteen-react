import axios from "axios";
import * as actionTypes from "./actionTypes";

const signUpStart = () => ({
  type: actionTypes.SIGNUP_START
});

const signUpSuccess = payload => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload
});

const signUpFailed = payload => ({
  type: actionTypes.SIGNUP_FAILED,
  payload
});

const signUp = user => async dispatch => {
  dispatch(signUpStart());
  try {
    const res = await axios.post(
      "https://mygbols.herokuapp.com/api/v1/auth/signup",
      {
        ...user
      }
    );
    dispatch(signUpSuccess(res.data));
  } catch (err) {
    dispatch(signUpFailed(err));
  }
};

export default {
  signUp,
  signUpStart,
  signUpFailed,
  signUpSuccess
};
