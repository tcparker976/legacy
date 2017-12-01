const axios = require('axios');
var config = require('../config/config.example.js');
if (!process.env.TMDBAPI) {
  config = require('../config/config.js');
}

const omdbToken = process.env.OMDBAPI || config.OMDBAPI;

const fetchRatings = (id) => {
  return axios.get(`http://www.omdbapi.com/?apikey=${omdbToken}&i=${id}`)
} 


module.exports = {
  fetchRatings
}