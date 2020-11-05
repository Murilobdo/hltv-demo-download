const express = require('express');
const app = express();

//rotas de navegação
const routeResults = require('./routes/results');


app.use('/Results', routeResults);

module.exports = app;

