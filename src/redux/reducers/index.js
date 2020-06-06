import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import catchables from "./catchables";

export default combineReducers({ catchables, visibilityFilter });
