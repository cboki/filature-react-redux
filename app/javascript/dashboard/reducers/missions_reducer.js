import { FETCH_MISSIONS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    default:
      return state;
  }
}
