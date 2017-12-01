const express = require('express');
const path = require('path');
const omdb = require('./utils/omdb');
const { movieTrend } = require('./utils/trendFetch');
const { avgTweetEmotion } = require('./utils/twitterEmotion');
const { fetchRatings } = require('./utils/ratingFetch');
const Movie = require('./db/Movie');

const app = express();

app.use(express.static('public'));
const public = path.join(__dirname, '/public');

const port = process.env.PORT || 7331;

app.get('/', (req, res) => {
  res.send('This is the landing page!');
});

app.get('/search/:movie', (req, res) => {
  omdb.searchMoviesByName(req.params.movie).then((data) => {
    return res.send(data);
  });
});

app.get('/trends/:title', async (req, res) => {
  const { title } = req.params;
  const trends = await movieTrend(title);
  const { timelineData } = JSON.parse(trends).default;
  trendData = timelineData.map((trend) => {
    let { formattedAxisTime } = trend;
    if (trend.formattedAxisTime.length < 7) formattedAxisTime += ', 2017';
    return {
      formattedAxisTime,
      value: (trend.value[0] / trend.value[1]) * 100,
    };
  });
  console.log(trendData);
  res.send(trendData); 
});

app.get('/sentiment/:title', async (req, res) => {
  const { title } = req.params;
  const tweets = await avgTweetEmotion(title);
  console.log(tweets);
  res.send(tweets);
})


app.get('/ratings/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const results = await fetchRatings(id);
    res.send(results.data); 
  } catch (err) {
    res.status(400).send(err);
  }
  
})

app.get('/*', (req, res) => {
  res.sendFile(public + '/index.html');
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));

/* ========== OLD API CALL - saving for reference in case we want trending again ===== 

app.get('/movie/:tmdbId', async (req, res) => {
  const { tmdbId } = req.params;

  try {
    const movie = await Movie.findOneAndUpdate({ tmdbId }, {});
    if (movie) {
      const emotion = await avgTweetEmotion(movie.title);
      const results = movie.toObject();
      results.emotion = emotion;
      return res.send(results);
    }

    const data = [await tmdb.fetchMovieById(tmdbId), await tmdb.fetchImageById(tmdbId)];
    const movieData = data[0];
    const images = data[1];

    const results = { tmdbId };
    results.title = movieData.title;
    results.productionCompanies = movieData.production_companies.map(company => company.name);
    results.genres = movieData.genres.map(genre => genre.name);
    results.budget = movieData.budget;
    results.revenue = movieData.revenue;
    results.releaseDate = movieData.release_date;
    results.images = images;

    const smData = [
      await movieTrend(results.title, results.releaseDate),
      await avgTweetEmotion(results.title),
    ];
    const trendData = smData[0];
    const emotion = smData[1];

    const { timelineData } = JSON.parse(trendData).default;
    results.trendData = timelineData.map((trend) => {
      let { formattedAxisTime } = trend;
      if (trend.formattedAxisTime.length < 7) formattedAxisTime += ', 2017';
      return {
        formattedAxisTime,
        value: (trend.value[0] / trend.value[1]) * 100,
      };
    });

    const movieDoc = new Movie(results);
    await movieDoc.save();

    results.emotion = emotion;
    return res.send(results);
  } catch (err) {
    return res.status(400).send(err);
  }

});

*/ 