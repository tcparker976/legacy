import { FETCH_SENTIMENT, CLEAR_MOVIE } from '../actions/MovieAction';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SENTIMENT:
      return action.payload.data
    case CLEAR_MOVIE:
      return [];
    default:
      return state;
  }
}
