// Setup empty JS object to act as endpoint for all routes
projectData = {};

// define port
const port = 6000;

// define apiKey
const apiKey = "53ae82c31077a4094f497681c08c4e94";

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/

// define cors and body-parser
const cors = require("cors");
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));


// Setup Server
app.listen(port, () => {
    console.log(`server will running on port ${port}`);
})
