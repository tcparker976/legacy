import { FETCH_MOVIE, CLEAR_MOVIE } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload.data;
    case CLEAR_MOVIE:
      return null
    default:
      return state;
  }
}
