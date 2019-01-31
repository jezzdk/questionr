const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./app/config');

// Connect to database
mongoose.connect(config.mongoDB, { useNewUrlParser: true }).then(() => {
  console.log('Connected to MongoDB');
});

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = config.appPort || 5000;

app.listen(port);

console.log('Server running on http://localhost:' + port);

const routes = require('./app/routes');

app.use('/api', routes);

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

// Server index.html page when request to the root is made
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
