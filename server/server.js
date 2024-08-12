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
  //what was here before with original API / TODO: need to change hardcoded at the end
  //ORIGINAL: const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=chest&Intensity_Level=Beginner';

  // const url = 'https://api.api-ninjas.com/v1/exercises';

  const url =`https://api.api-ninjas.com/v1/exercises?difficulty=${req.query.difficulty}&muscle=${req.query.muscle}`;

    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.API_KEY,
            //what was here before with original API
            // ORIGINAL:'x-rapidapi-key': process.env.API_KEY,
            // ORIGINAL:'x-rapidapi-host': 'work-out-api1.p.rapidapi.com'
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