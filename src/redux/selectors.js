import { Fish, Bug } from "../catchable.js";
import {AVAIL, TYPES} from "../constants";


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

export const getCatchablesByFilters = 
    (store, availabilityFilter, typeFilter) => {
  let catchables = getAllCatchables(store);
  if (availabilityFilter === AVAIL.NOW ) {
    catchables = filterNow(catchables);
  }

  switch (typeFilter) {
    case TYPES.FISH:
      catchables = catchables.filter(catchable => catchable instanceof Fish);
      break;
    case TYPES.BUGS:
      catchables = catchables.filter(catchable => catchable instanceof Bug);
      break;
    case TYPES.ALL:
    default:
      // Do nothing.
      break;
  }

  catchables.sort((a, b) => b.value - a.value);
  return catchables;
};