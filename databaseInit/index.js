const axios = require('axios');
var config = require('../config/config.example.js');
const Movie = require('../db/Movie');
if (!process.env.TMDBAPI) {
  config = require('../config/config.js');
}
const omdbToken = process.env.OMDBAPI || config.OMDBAPI;

var json = require('./movieList.json');

var lastMovie = json[json.length];

var isComplete = (movieObj) => {
  if (movieObj === lastMovie) {
    console.log('\x1b[0m', '////////////////////////////////');
    console.log('Initialization complete!');
    process.exit();
  }
}

const movieDownload = async (movieObj) => {
  if (!movieObj) {
    console.log('movieObj wasn\'t passed')
    return;
  }
    try {
      const movie = await Movie.findOneAndUpdate({ Title: movieObj.title }, {});
      if (movie) {
        console.log('\x1b[32m', `In Db - ${movieObj.title}`);
        isComplete(movieObj);
      } else {
        setTimeout(async () => {
          var data = await axios.get(`http://www.omdbapi.com/?apikey=${omdbToken}&t=${movieObj.title}`);
          if (data.data.Response !== 'False') {
            var movieOMDB = new Movie(data.data);
            movieOMDB.save((err, res) => {
              if (err) {
                // console.log('\x1b[31m', err);
              }
              isComplete(movieObj);
            });
            console.log('\x1b[34m', 'Added -', data.data.Title);
          } else {
            console.log('\x1b[33m', `Skip  - ${movieObj.title}`);
            isComplete(movieObj);
          }
        }, 100);
      }
    } catch (err) {
      console.log(err);
    }
}

const omdbMassiveInitialize = function(starterKey) {
  console.log('\x1b[0m', '////////////////////////////////');
  console.log('starterKey Accepted - Initializing')
  console.log('////////////////////////////////');
  if (starterKey === 'bingoBongo') {
    for (var i = 0; i < json.length; i++) {
      movieDownload(json[i])
    }
  } else {
    console.log('Invalid starterKey');
    process.exit()
  }
}

console.log(`Alert!\nInitializing ${json.length} movies`);
omdbMassiveInitialize();
