const mongoose = require('mongoose');
const omdb = require('../utils/ratingFetch').fetchRatings;
const { movieTrend } = require('../utils/trendFetch');
const { avgTweetEmotion } = require('../utils/twitterEmotion');

require('./index.js');

var omdbSchema = new mongoose.Schema({
    imdbID: {
      type: String, // "tt3896198"
      required: true,
      unique: true,
    },
    Title: String, // "Guardians of the Galaxy Vol. 2"
    Year: Number, // 2017
    Rated: String, // "PG-13"
    Released: String, // release date
    Runtime: String, // "136 min"
    Genre: [{
      type: String // ["Action", "Adventure", "Sci-Fi"]
    }],
    Director: [{
      type: String // ["James Gunn"]
    }],
    Writer: [{
      type: String // ["James Gunn", etc]
    }],
    Actors: [{
      type: String // ["Chris Pratt", etc]
    }],
    Plot: String, // sentence string
    Language: String, // "English"
    Country: [{
      type: String // ["USA", "New Zealand", "Canada"]
    }],
    Awards: String, // "4 wins & 12 nominations."
    Poster: String, // poster url
    Ratings: [{}],
    imdbRatingOutOfTen: String, // "7.8/10"
    rottenTomatoesPercent: String, // "82%"
    metacriticOutOfHundred: String, // "67/100"

    Metascore: Number, // 67
    imdbRating: String, // "7.8"
    imdbVotes: String, // "287,912"
    Type: String, // "movie"
    DVD: String, // DVD release date
    BoxOffice: String, // "$389,804,217"
    Production: String, // "Walt Disney Pictures"
    Website: String, // "https://marvel.com/guardians"
}, {timestamps: true})

const Movie = mongoose.model('Movie', omdbSchema);

// this function will be used to auto insert movies into the new table
var insertMovie = async (imdbID) => {
  try {
    const movie = await Movie.findOneAndUpdate({ imdbID }, {});
    if (movie) {
      // console.log('Updating timestamp only');
      return;
    }
    var data = await omdb(imdbID);
    var movieOMDB = new Movie(data.data);
    movieOMDB.save();
  } catch (err) {
    console.log(err);
  }
}

var addTenMovies = () => {
  var movieIds = ['tt0993846', 'tt1049413', 'tt0440963', 'tt5027774',  'tt1856101', 'tt5013056', 'tt0446029', 'tt0381061', 'tt0499549', 'tt0470752', 'tt3659388'];
  movieIds.forEach(movieId => {
    insertMovie(movieId);
  });
}

addTenMovies();

module.exports = Movie;
