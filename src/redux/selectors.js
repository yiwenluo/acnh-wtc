import { VISIBILITY_FILTERS } from "../constants";
import { Fish, Bug } from "../catchable.js";


const getAllCatchables = store => 
    [].concat(store.catchables.fish).concat(store.catchables.bugs);


export const getCatchablesByVisibilityFilter = (store, visibilityFilter) => {
  const catchables = getAllCatchables(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.ONLY_FISH:
      return catchables.filter(catchable => catchable instanceof Fish);
    case VISIBILITY_FILTERS.ONLY_BUG:
      return catchables.filter(catchable => catchable instanceof Bug);
    case VISIBILITY_FILTERS.ALL:
    default:
      return catchables;
  }
};