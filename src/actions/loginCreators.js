import axios from "axios";
import * as actionTypes from "./actionTypes";

const loginStart = () => ({
  type: actionTypes.LOGIN_START
});

const loginSuccess = payload => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload
});

const loginFailed = payload => ({
  type: actionTypes.LOGIN_FAILED,
  payload
});

const login = user => async dispatch => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://mygbols.herokuapp.com/api/v1/auth/login",
      {
        ...user
      }
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailed(err));
  }
};

export default {
  login,
  loginStart,
  loginFailed,
  loginSuccess
};
