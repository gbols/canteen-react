import { combineReducers } from "redux";
import fetchMenu from "./menu";
import login from "./login";
import signUp from "./signup";
import postOrder from "./order";
import fetchHistory from "./history";

const rootReducer = combineReducers({
  fetchMenu,
  login,
  signUp,
  postOrder,
  fetchHistory
});
export default rootReducer;
