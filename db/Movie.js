const mongoose = require('mongoose');
const tmdb = require('../utils/tmdb');
const { movieTrend } = require('../utils/trendFetch');
const { avgTweetEmotion } = require('../utils/twitterEmotion');

require('./index.js');

const movieSchema = new mongoose.Schema({
  tmdbId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: String,
  productionCompanies: [{
    type: String,
  }],
  genres: [{
    type: String,
  }],
  images: [{
    type: String,
  }],
  budget: Number,
  revenue: Number,
  releaseDate: Date,
  trendData: [{
    formattedAxisTime: String,
    value: Number,
  }],
}, {timestamps: true});

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

const Movie = mongoose.model('Movie', movieSchema);
const MovieOMDB = mongoose.model('MovieOMDB', omdbSchema);

var insertMovie = async (tmdbId) => {
  try {
    const movie = await Movie.findOneAndUpdate({ tmdbId }, {});
    if (movie) {
      // console.log('Updating timestamp only');
      return;
    }
    var data = [await tmdb.fetchMovieById(tmdbId), await tmdb.fetchImageById(tmdbId)];
    var movieData = data[0];
    var images = data[1];
    var results = { tmdbId };
    results.title = movieData.title;
    results.productionCompanies = movieData.production_companies.map(company => company.name);
    results.genres = movieData.genres.map(genre => genre.name);
    results.budget = movieData.budget;
    results.revenue = movieData.revenue;
    results.releaseDate = movieData.release_date;
    results.images = images;
    var smData = [
      await movieTrend(results.title, results.releaseDate),
      await avgTweetEmotion(results.title),
    ];
    var trendData = smData[0];
    var emotion = smData[1];
    if (trendData) {
      var { timelineData } = JSON.parse(trendData).default;
      results.trendData = timelineData.map((trend) => {
        let { formattedAxisTime } = trend;
        if (trend.formattedAxisTime.length < 7) formattedAxisTime += ', 2017';
        return {
          formattedAxisTime,
          value: (trend.value[0] / trend.value[1]) * 100,
        };
      });
    }

    var movieDoc = new Movie(results);
    movieDoc.save();
    // console.log('Adding Movie to Db');
  } catch (err) {
    console.log(err);
  }
}

// this function will be used to auto insert movies into the new table
var insertMovieOMDB = async (imdbID, temp) => {
  try {
    const movie = await MovieOMDB.findOneAndUpdate({ imdbID }, {});
    if (movie) {
      console.log('Updating timestamp only');
      return;
    }

    // var data = await something;
    var data = temp;

    var movieOMDB = new MovieOMDB(data);
    movieOMDB.save();

  } catch (err) {
    console.log(err);
  }
}

var addTenMovies = () => {
  // ex machina 264660, avatar 19995, bourne ultimatum 2503, blade runner 2049 335984, dunkirk 374720, casino royale 36557, scott pilgrim 22538, three billboards 359940, wolf of wallstreet 106646, up 14160
  var movieIds = ['264660', '19995', '2503', '335984',  '374720', '36557', '22538', '359940', '106646', '14160'];
  movieIds.forEach(movieId => {
    insertMovie(movieId);
  });
}

addTenMovies();

insertMovieOMDB('tt3896198', {
    "imdbID": "tt3896198",
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-lord created by), Steve Gan (Star-lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    "Language": "English",
    "Country": "USA, New Zealand, Canada",
    "Awards": "4 wins & 12 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "82%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.8",
    "imdbVotes": "287,912",
    "Type": "movie",
    "DVD": "22 Aug 2017",
    "BoxOffice": "$389,804,217",
    "Production": "Walt Disney Pictures",
    "Website": "https://marvel.com/guardians",
    "Response": "True"
});

module.exports = Movie;
