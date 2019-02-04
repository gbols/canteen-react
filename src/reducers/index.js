import { combineReducers } from "redux";
import fetchMenu from "./menu";
import login from "./login";
import signUp from "./signup";

const rootReducer = combineReducers({ fetchMenu, login, signUp });
export default rootReducer;
