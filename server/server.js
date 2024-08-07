const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(cors());

//Fetchs the workout options from the third party api
app.get('/workouts', (req, res) => {
  const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=chest&Intensity_Level=Beginner';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': 'work-out-api1.p.rapidapi.com'
        }
    }
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const uuid =  uuidv4( );
      const updatedData = data.map(exercise => ({
        ...exercise,
        id: uuidv4()
      }));
      res.json(updatedData)
        // console.log(updatedData);
    })
    .catch(err => console.error(err.message))
});

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
