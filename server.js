// Setup empty JS object to act as endpoint for all routes
projectData = {};

// define port
const port = 8000;

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/

// define cors and body-parser
const cors = require('cors');
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
app.listen(port, () => {
    console.log(`server will running on port ${port}`);
});

// get response data
app.get('/getWeatherData', (req, res) => {
    res.send(projectData);
});

// post request data
app.post('/postWeatherData', (req, res) => {
    projectData = req.body;
    res.send()
});