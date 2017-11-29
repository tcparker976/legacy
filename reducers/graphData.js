import { FETCH_MOVIE } from '../actions/MovieAction';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload.data.trendData.map(data => (
        {
          date: data.formattedAxisTime,
          primaryTrendVolume: data.value,
        }
      ));
    default:
      return state;
  }
}
