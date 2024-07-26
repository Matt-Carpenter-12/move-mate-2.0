// require('dotenv').config();
const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.Port || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// The server is started after the database is opened
db.once('open', () => {
    app.listen(PORT, function() {
        console.log(`Listening on Port ${PORT}`);
    });
});
