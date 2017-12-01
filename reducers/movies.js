import { FETCH_MOVIES, CLEAR_MOVIES, FETCH_MOVIE } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.data.Search;
    case FETCH_MOVIE: 
      return null;
    case CLEAR_MOVIES:
      return null;
    default:
      return state;
  }
}
