import { FETCH_RECENT_MOVIES } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_RECENT_MOVIES:
      return action.payload.data;
    default:
      return state;
  }
}