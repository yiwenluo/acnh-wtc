import { EXPAND_FAB, SET_FILTER, COLLAPSE_FAB } from "./actionTypes";

export const setFilter = filter => ({ 
  type: SET_FILTER, 
  payload: { 
    filter 
  }, 
});

export const expandFab = () => ({
  type: EXPAND_FAB, 
});

export const collapseFab = () => ({
  type: COLLAPSE_FAB,
});

export const setFilterActive = (name, option) => ({
  type: SET_FILTER, 
  payload: {
    name,
    option,
  }
});