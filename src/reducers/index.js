import { combineReducers } from "redux";
import fetchMenu from "./menu";
import login from "./login";

const rootReducer = combineReducers({ fetchMenu, login });
export default rootReducer;
