import { combineReducers } from "redux";
import catchables from "./catchables";
import fab from "./fab";
import availabilityFilter from "./availabilityFilter";
import typeFilter from "./typeFilter";

export default combineReducers({
  availabilityFilter, 
  catchables, 
  fab, 
  typeFilter,
});
