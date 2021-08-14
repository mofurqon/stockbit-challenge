const express = require('express');
const { search, detail } = require('./routes/movies');
const logger = require('./utils/db');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send(' Welcome to Stockbit Challenge'));
app.get('/search', logger, search);
app.get('/detail', logger, detail);

module.exports = app;