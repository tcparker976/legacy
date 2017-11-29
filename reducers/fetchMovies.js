import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/MovieAction';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.data.results;
    case FETCH_MOVIE: 
      return []; 
    default:
      return state;
  }
}
