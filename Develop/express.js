const express = require('express');
const path = require('path');

// Express App set-up
const app = express();
const port = process.env.PORT || 3001;

// Set-up for Express App to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
