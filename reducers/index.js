import { combineReducers } from 'redux';
import movie from './movie';
import movies from './movies';
import trends from './trends';
import sentiment from './sentiment';


const rootReducer = combineReducers({
  movie,
  movies,
  sentiment,
  trends
});

export default rootReducer;
