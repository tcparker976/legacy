const axios = require('axios');
var config = require('../config/config.example.js');
const Movie = require('../db/Movie');
if (!process.env.TMDBAPI) {
  config = require('../config/config.js');
}
const omdbToken = process.env.OMDBAPI || config.OMDBAPI;
var json = require('./movieList.json');

console.log(`Alert!\nInitializing ${json.length} movies`);

const movieDownload = async (movieObj) => {
  if (!movieObj) {
    console.log('movieObj wasn\'t passed')
    return;
  }
    try {
      const movie = await Movie.findOneAndUpdate({ Title: movieObj.title }, {});
      if (movie) {
        console.log(`${movieObj.title} - Already in db`);
      } else {
        setTimeout(async () => {
          console.log(`${movieObj.title} - Not in db yet`)
          var data = await axios.get(`http://www.omdbapi.com/?apikey=${omdbToken}&t=${movieObj.title}`);
          if (data.data.Response !== 'False') {
            var movieOMDB = new Movie(data.data);
            movieOMDB.save();
            console.log('Added new movie:', data.data.Title);
          } else {
            console.log(`${movieObj.title} - Skipped`);
          }
        }, 100);
      }
    } catch (err) {
      console.log(err);
    }
}

const omdbMassiveInitialize = function(starterKey) {
  if (starterKey === 'bingoBongo') {
    for (var i = 0; i < 5; i++) {
      // console.log(json[i]);
      movieDownload(json[i])
      // console.log();
    }

    // json.forEach(movieObj) {
    //   movieDownload(movieObj);
    // }
    console.log('////////////////////////////////')
    console.log('Initialization complete!')
  } else {
    console.log('Invalid starterKey');
    // return false;
  }
  // process.exit()
}

omdbMassiveInitialize('bingoBongo')
