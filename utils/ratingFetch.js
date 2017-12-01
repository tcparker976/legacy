const axios = require('axios');
var config = require('../config/config.example.js');
const Movie = require('../db/Movie');
if (!process.env.TMDBAPI) {
  config = require('../config/config.js');
}

const omdbToken = process.env.OMDBAPI || config.OMDBAPI;

const fetchRatings = (id) => {
  var dbThenFetch = async (id) => {
    // console.log('Beginning movie data search');
    try {
      const movie = await Movie.findOneAndUpdate({ imdbID: id }, {});
      if (movie) {
        // console.log('Found in db, updating timestamp');
        return {data: movie};
      } else {
        // console.log('Couldnt find in the db')
        var data = await axios.get(`http://www.omdbapi.com/?apikey=${omdbToken}&i=${id}`);
        var movieOMDB = new Movie(data.data);
        movieOMDB.save();
        // console.log('Added new movie:', data.data.Title);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  }
  return dbThenFetch(id);
}

module.exports = {
  fetchRatings
}
