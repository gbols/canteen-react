import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  isLoading: false,
  response: {},
  error: null,
  success: null
};

const isHistoryLoading = { isLoading: true };

const updateFetchHistorySuccessState = (state, action) => ({
  ...state,
  ...{ isLoading: false, response: action.payload, success: true }
});

const updateFetchHistoryFailedState = (state, action) => ({
  ...state,
  ...{ isLoading: false, response: action.payload, error: true }
});

const fetchHistory = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HISTORY_START:
      return { ...state, ...isHistoryLoading };
    case actionTypes.FETCH_HISTORY_FAILED:
      return updateFetchHistoryFailedState(state, action);
    case actionTypes.FETCH_HISTORY_SUCCESS:
      return updateFetchHistorySuccessState(state, action);
    default:
      return state;
  }
};

export default fetchHistory;
