import axios from "axios";
import * as actionTypes from "./actionTypes";

const postOrderStart = () => ({
  type: actionTypes.POST_ORDER_START
});

const postOrderSuccess = payload => ({
  type: actionTypes.POST_ORDER_SUCCESS,
  payload
});

const postOrderFailed = payload => ({
  type: actionTypes.POST_ORDER_FAILED,
  payload
});

const postOrder = myOrders => async dispatch => {
  const token = localStorage.getItem("token");
  dispatch(postOrderStart());
  try {
    const res = await axios.post(
      "https://mygbols.herokuapp.com/api/v1/orders",
      myOrders,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    dispatch(postOrderSuccess(res.data));
  } catch (err) {
    dispatch(postOrderFailed(err));
  }
};

export default {
  postOrder,
  postOrderFailed,
  postOrderStart,
  postOrderSuccess
};
