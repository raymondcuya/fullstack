const express = require('express');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/v1', api);

module.exports = app;
