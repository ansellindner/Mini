var express = require('express');
var api = express.Router();

// middleware specific to this router
api.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
api.get('/', function(req, res) {
  res.send('API calls will be here');
});
// define the about route
api.get('/getAddress', function(req, res) {
  res.send('get address');
});

module.exports = api;