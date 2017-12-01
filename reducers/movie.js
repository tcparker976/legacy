import { FETCH_RATINGS, CLEAR_MOVIE } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_RATINGS:
      return {
        ...state,
        ...action.payload.data
      }
    case CLEAR_MOVIE:
      return null;
    default:
      return state;
  }
}
