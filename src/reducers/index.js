import { combineReducers } from "redux";
import fetchMenu from "./menu";
import login from "./login";
import signUp from "./signup";
import postOrder from "./order";

const rootReducer = combineReducers({ fetchMenu, login, signUp, postOrder });
export default rootReducer;
