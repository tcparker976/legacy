const axios = require('axios');
var config = require('../config/config.example.js');
if (!process.env.TMDBAPI) {
  config = require('../config/config.js');
}
const omdbToken = process.env.OMDBAPI || config.OMDBAPI
/*
 * Fetch search results from TMDB by keyword query
 * @param {String} query
 * @return {Promise:Object} results
 */
exports.searchMoviesByName = query => {
  return (
    axios.get(`http://www.omdbapi.com/?apikey=${omdbToken}&s=${query}`)
    .then(res => {
      return res.data
    }).catch(err => console.error(err.response.data.status_message))
  )
};

/*
 * Fetch movie data from TMDB by TMDB ID
 * @param {Number} id
 * @return {Promise:{see https://developers.themoviedb.org/3/movies/get-movie-details}} data
 */
// exports.fetchMovieById = id => (
//   axios.get(`http://api.themoviedb.org/3/movie/${id}`, {
//     params: {
//       api_key: process.env.TMDBAPI || config.TMDBAPI,
//       // 'language': 'en-US',
//     },
//   }).then(res => (
//     res.data
//   )).catch(err => console.error(err.response.data.status_message))
// );

// /*
//  * Fetch promotional images from TMDB by TMDB ID
//  * @param {Number} id
//  * @return {Promise:[String]} images
//  */
// exports.fetchImageById = id => (
//   axios.get(`http://api.themoviedb.org/3/movie/${id}/images`, {
//     params: {
//       api_key: process.env.TMDBAPI || config.TMDBAPI,
//       // 'language': 'en-US',
//     },
//   }).then((res) => {
//     const images = res.data.backdrops;
//     return images.map(img => img.file_path);
//   }).catch(err => console.error(err.response.data.status_message))
// );
