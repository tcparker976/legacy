import { FETCH_BOXOFFICE } from '../actions/BoxOfficeGraph';
import { CLEAR_MOVIE } from '../actions/MovieAction';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BOXOFFICE:
      return action.payload.data.filter(movie => {
        return movie.BoxOffice !== "N/A"
      })
      .map(movie => {
        movie.BoxOffice = parseInt(movie.BoxOffice.substr(1, movie.BoxOffice.length).replace(/,/g, ''));
        return movie;
      })
      .sort((a, b) => a.BoxOffice < b.BoxOffice ? 1 : -1 );
    case CLEAR_MOVIE:
      return null;
    default:
      return state;
  }
}
