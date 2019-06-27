const express = require('express');
const path = require('path');
const winston = require('winston');
const bodyParser = require('body-parser');

// Get all environment variables
require('dotenv').config();

// Set up the express app
const app = express();
const port = parseInt(process.env.PORT, 10) || 4000;

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) =>
  response.status(200).json({ msg: 'Welcome to Auth Microservice' })
);

app.listen(port, () => {
  winston.info(`Started up at port port ${port}`);
});

module.exports = app;
