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

const Movie = mongoose.model('Movie', movieSchema);

var insertMovie = async (tmdbId) => {
  try {
    const movie = await Movie.findOneAndUpdate({ tmdbId }, {});
    if (movie) {
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

module.exports = Movie;
