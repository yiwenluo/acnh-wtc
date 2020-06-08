import { SET_FILTER } from "../actionTypes";
import { AVAIL } from "../../constants";

const NAME = 'Availability';

const initialState =  {
  name: NAME,
  options: Object.values(AVAIL),
  activeOption: AVAIL.NOW,
};

const availabilityFilter = (state = initialState, action) => {
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
  return Object.assign({}, state);
};

export default availabilityFilter;
