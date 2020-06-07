import { VISIBILITY_FILTERS } from "../constants";
import { Fish, Bug } from "../catchable.js";


const getAllCatchables = store => 
    [].concat(store.catchables.fish).concat(store.catchables.bugs);

const filterNow = (catchables) => {
    const now = new Date();
    const hour = now.getHours();
    const isNorthernHemi = true; // TODO: check hemi.
    const month = now.getMonth() + 1;

    return catchables.filter((item) => {
      return item.available(isNorthernHemi, month, hour);
    });
}  

export const getCatchablesByVisibilityFilter = (store, visibilityFilter) => {
  const catchables = filterNow(getAllCatchables(store));
  catchables.sort((a, b) => b.value - a.value);

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