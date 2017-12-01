import { combineReducers } from 'redux';
import boxoffice from './boxoffice';
import movie from './movie';
import movies from './movies';
import trends from './trends';
import sentiment from './sentiment';


const rootReducer = combineReducers({
  movie,
  movies,
  sentiment,
  trends,
  boxoffice
});

export default rootReducer;
