import { EXPAND_FAB, COLLAPSE_FAB } from "../actionTypes";

const initialState = {
  collapsed: true,
};

const fab = (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_FAB: {
      return {
        collapsed: false,
      }
    }
    case COLLAPSE_FAB: {
      return {
        collapsed: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default fab;
