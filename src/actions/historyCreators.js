import axios from "axios";
import * as actionTypes from "./actionTypes";

const fetchHistoryStart = () => ({
  type: actionTypes.FETCH_HISTORY_START
});

const fetchHistorySuccess = payload => ({
  type: actionTypes.FETCH_HISTORY_SUCCESS,
  payload
});

const fetchHistoryFailed = payload => ({
  type: actionTypes.FETCH_HISTORY_FAILED,
  payload
});

const fetchHistory = userid => async dispatch => {
  const token = localStorage.getItem("token");
  dispatch(fetchHistoryStart());
  try {
    const res = await axios.get(
      `https://mygbols.herokuapp.com/api/v1/users/${userid}/orders`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    dispatch(fetchHistorySuccess(res.data));
  } catch (err) {
    dispatch(fetchHistoryFailed(err));
  }
};

export default {
  fetchHistory,
  fetchHistoryFailed,
  fetchHistoryStart,
  fetchHistorySuccess
};
