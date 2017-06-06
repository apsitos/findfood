const path = require('path');
const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser')
const port = (process.env.PORT || 3000);
const app = express();
const request = require('request');
const config = require('../config.env');
const API_KEY = (config.API_KEY);
// const router = require('./router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use('/assets', express.static(path.join(__dirname, '../app/assets')));
app.use(express.static('build'))

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/../build/index.html')) });

function getPlaces(req, res, next) {
  const address_url = `https://maps.googleapis.com/maps/api/geocode/json?address=90+Corona+St,+Denver,+CO&key=${API_KEY}`
  request(address_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response.body);
      // response.send(response.body)
    }
  })
  .then((response) => { response.sendFile(path.join(__dirname, '/../build/index.html')) })
}

// fetch(address_url)
// .then((response) => console.log(response.body))
// .then((response) => { response.json() })
// .then((response) => { response.sendFile(path.join(__dirname, '/../build/index.html')) })
app.get('/api/places?', (request, reponse) => {
  getPlaces()
})

// app.use('/api', router);
// app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../build/index.html')) });

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
