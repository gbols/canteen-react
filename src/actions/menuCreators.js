import axios from 'axios';
import * as actionTypes from './actionTypes';

const fetchMenuStart = () => ({
  type: actionTypes.FETCH_MENU_START
});

const fetchMenuSuccess = payload => ({ 
  type: actionTypes.FETCH_MENU_SUCCESS,
  payload,
});

const fetchMenuFailed = payload => ({
  type: actionTypes.FETCH_MENU_FAILED,
  payload,
});

const fetchMenu = () => async (dispatch) => {
  dispatch(fetchMenuStart());
  try{
    const res = await axios.get('https://mygbols.herokuapp.com/api/v1/menu');
    dispatch(fetchMenuSuccess(res.data));
  } catch (err) {
    dispatch(fetchMenuFailed(err));
  }
};

export default {
  fetchMenu,
  fetchMenuFailed,
  fetchMenuStart,
  fetchMenuSuccess,
};