const express = require('express');
const routes = require('./routes');
const favicon = require('express-favicon');
const app = express();

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon('../favicon.ico')); 

app.listen(process.env.PORT || 3000);