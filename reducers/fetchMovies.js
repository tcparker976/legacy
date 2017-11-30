import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.data.Search;
    case FETCH_MOVIE: 
      return null;
    default:
      return state;
  }
}
