import { FETCH_POSITION } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_POSITION:
      return action.payload;
    default:
      return state;
  }
}
