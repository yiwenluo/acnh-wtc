import { SET_FILTER } from "../actionTypes";
import { TYPES } from "../../constants";

const NAME = 'Types';

const initialState = {
  name: NAME,
  options: Object.values(TYPES),
  activeOption: TYPES.ALL,
};

const typeFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      if (action.payload.name === NAME) {
        state.activeOption = action.payload.option;
      }
      break;
    }
    default: {
      // Do nothing
    }
  }
  return state;
};

export default typeFilter;
