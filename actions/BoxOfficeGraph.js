import axios from 'axios';

export const FETCH_BOXOFFICE = 'FETCH_BOXOFFICE';

export const fetchBoxOffice = (imdbID) => {
  const request = axios.get(`/boxoffice/${imdbID}`);
  return {
    type: FETCH_BOXOFFICE,
    payload: request
  }
} 