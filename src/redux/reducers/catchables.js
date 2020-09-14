
import {DataStore} from '../../data-store.js';

const data = new DataStore();

const initialState = {
  fish: data.fish,
  bugs: data.bugs,
  sea: data.sea,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
