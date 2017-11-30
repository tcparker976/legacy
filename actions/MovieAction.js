import axios from 'axios';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_RATINGS = 'FETCH_RATINGS';
export const CLEAR_MOVIE = 'CLEAR_MOVIE';

export const fetchMovie = (id) => {
  const request = axios.get(`/movie/${id}`);
  return {
    type: FETCH_MOVIE,
    payload: request
  };
}

export const fetchMovies = (query) => {
  const request = axios.get(`/search/${query}`);
  console.log(request);
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export const fetchRatings = (id) => {
  const request = axios.get(`/ratings/${id}`);
  return {
    type: FETCH_RATINGS,
    payload: request
  }
}

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE
  }
}



