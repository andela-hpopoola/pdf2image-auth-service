const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const user = require('./controllers/users');

// Get all environment variables
require('dotenv').config();

// Set up the express app
const app = express();
const port = parseInt(process.env.PORT, 10) || 4000;

//enable cors
app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use morgan to log requests to the console
app.use(morgan('dev'));

app.get('/', (request, response) =>
  response.status(200).json({ msg: 'Welcome to Auth Microservice' })
);

app.post('/login', user.login);
app.post('/register', user.register);
app.get('/authenticate', user.authenticate);
app.get('/logout', user.logout);

app.listen(port, () => {
  console.info(`Started up at port port ${port}`);
});

module.exports = app;
