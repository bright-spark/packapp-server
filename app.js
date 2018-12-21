'use strict';

// --- Dependencies --- //
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const build = require('./routes/builds');

// --- Instantiations --- //
const app = express();

// --- Configurations --- //
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODBURI,
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
  }
);

// --- Middleware --- //
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL]
  })
);

// --- Routes --- //
app.use('/builds', build);

// --- Error Handling --- //
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({ code: 'unexpected' });
  }
});

module.exports = app;
