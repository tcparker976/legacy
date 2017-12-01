import { FETCH_TRENDS, CLEAR_MOVIE } from '../actions/MovieAction';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TRENDS:
      return action.payload.data.map(data => (
        {
          date: data.formattedAxisTime,
          primaryTrendVolume: data.value,
        }
      ));
    case CLEAR_MOVIE:
      return [];
    default:
      return state;
  }
}
