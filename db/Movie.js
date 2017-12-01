const mongoose = require('mongoose');
// var omdb = require('../utils/ratingFetch');
// console.log('omdb:', omdb);
require('./index.js');

var omdbSchema = new mongoose.Schema({
    imdbID: {
      type: String, // "tt3896198"
      required: true,
      unique: true,
    },
    Title: String, // "Guardians of the Galaxy Vol. 2"
    Year: String, // 2017
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

    Metascore: String, // 67
    imdbRating: String, // "7.8"
    imdbVotes: String, // "287,912"
    Type: String, // "movie"
    DVD: String, // DVD release date
    BoxOffice: String, // "$389,804,217"
    Production: String, // "Walt Disney Pictures"
    Website: String, // "https://marvel.com/guardians"
}, {timestamps: true})

const Movie = mongoose.model('Movie', omdbSchema);

module.exports = Movie;
