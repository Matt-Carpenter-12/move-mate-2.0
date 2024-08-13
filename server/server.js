require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { Workout } = require('./models/Workout');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(cors());

//Fetchs the workout options from the third party api
app.get('/workouts', (req, res) => {
  let url = `https://work-out-api1.p.rapidapi.com/search?`

  switch (req.query != null) {
    case req.query.Intensity_Level != null && req.query.Muscles != null && req.query.Equipment != null:
      url += `Intensity_Level=${req.query.Intensity_Level}&Muscles=${req.query.Muscles}&Equipment=${req.query.Equipment}`
      console.log(url)
      break;
    case req.query.Intensity_Level != null && req.query.Muscles != null:
      url += `Intensity_Level=${req.query.Intensity_Level}&Muscles=${req.query.Muscles}`
      console.log(url)
      break;
    case req.query.Intensity_Level != null:
      url += `Intensity_Level=${req.query.Intensity_Level}`
      console.log(url)
  }

  console.log(url)
  // const url = `https://work-out-api1.p.rapidapi.com/search?Muscles=${req.query.Muscles}&Intensity_Level=${req.query.Intensity_Level}`;

  // const url = `https://work-out-api1.p.rapidapi.com/search?Muscles=Biceps&Intensity_Level=Beginner`


  const options = {
    method: 'GET',
    headers: {
      // 'X-Api-Key': process.env.API_KEY,
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'work-out-api1.p.rapidapi.com'
    }
  }
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const updatedData = data.map(exercise => ({
        ...exercise,
        id: uuidv4()
      }));
      res.json(updatedData)
      console.log(updatedData);
    })
    .catch(err => console.error(err.message))
});

//Adds an exercise to the database
app.post('/workouts', async (req, res) => {
  try {
    const newExercise = await Workout.create(req.body);
    console.log('New exercise added to the database');
  } catch (error) {
    console.error(error.message)
  }
})



// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});