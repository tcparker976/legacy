const mongoose = require('mongoose');
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

module.exports = Movie;
