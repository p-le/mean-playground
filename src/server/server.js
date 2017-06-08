const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')('Express');
const logger = require('morgan');

const app = express();
// app.set('views', path.resolve(__dirname, 'views'));
// app.set('view engine', 'pug');
app.set('port', process.env.PORT || 10000);

app.use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.resolve(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

module.exports = app;
