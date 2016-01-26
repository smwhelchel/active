var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
var router = express.Router();

var baseUrl = 'http://api.amp.active.com/v2/search?query=';

var apiKey = '&api_key=wwzz7ez5yn8s3vqzyns3hsxv';

router.post('/', bodyParser.json(), function (req, res) {
  var data = req.body;
    var newCity = data.city.replace(/\s+/g, '%20');
    var newState = data.state.toUpperCase();

  var queryURL = baseUrl + data.activity + '&near=' + newCity + ',' + newState + ',US' + apiKey;

  request(queryURL, function (error, response, body) {
     console.log(body);
    if (error) {
      return console.log('error');
    }

    if (response.statusCode !== 200) {
      return console.log('status code wrong');
    }

    if (!error && response.statusCode == 200) {
      console.log('server works');
      var data = JSON.parse(body);
    } 
  });
});

module.exports = router;


