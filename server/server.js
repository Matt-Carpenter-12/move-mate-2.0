const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { Exercise } = require('./models/Workout');

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
  const url = 'https://api.api-ninjas.com/v1/exercises';
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
      const uuid =  uuidv4();
      const updatedData = data.map(exercise => ({
        ...exercise,
        id: uuid
      }));
      res.json(updatedData)
      console.log(updatedData);
    })
    .catch(err => console.error(err.message))
});

//Adds an exercise to the database
app.post('/workouts', async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    console.log('New exercise added to the database');
  } catch (error) {
    console.error(error.message)
  }
})

//FOR EMAIL REMINDERS !!!
// const transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//      user:'mail@gmail.com',
//   },
// });
//
// [in the POST request]
// TODO: make the data come in as req.body (boolean to use if wants reminder?)
// TODO: attach mail messages as options to send
//  let mailOptions = {
//    from: 'YOUR_MAIL_ADDRESS',
//    to: user.email,
//    subject: 'MoveMate Reminder',
//    html: mailTemplate, ![need to create mail template]!
//  };
// 
// TODO: transporter.sendMail(message) => {function for scheduling?}


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