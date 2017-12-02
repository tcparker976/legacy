import { combineReducers } from 'redux';
import boxoffice from './boxoffice';
import movie from './movie';
import movies from './movies';
import trends from './trends';
import sentiment from './sentiment';
import recents from './recents';
import { fetchMovies } from '../actions/MovieAction.js';

// const data = fetchMovies()
// console.log(data)
// console.log('datitos #1')

const rootReducer = combineReducers({
  recents,
  movie,
  movies,
  sentiment,
  trends,
  boxoffice
});

export default rootReducer;
