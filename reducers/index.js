import { combineReducers } from 'redux';
import fetchMovie from './fetchMovie';
import graphData from './graphData';
import fetchMovies from './fetchMovies';

const rootReducer = combineReducers({
  movie: fetchMovie,
  graphData,
  movies: fetchMovies
});

export default rootReducer;
