import { FETCH_MOVIE } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload.data;
    default:
      return state;
  }
}
