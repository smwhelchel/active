var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.json();
var router = express.Router();

var baseUrl = 'http://api.amp.active.com/v2/search?query=';

var apiKey = '&api_key=wwzz7ez5yn8s3vqzyns3hsxv';

router.post('/', textParser, function (req, res) {
  console.log(req.body);
  var queryURL = baseUrl + req.body.activity + '&start_date=2016-01-28..' +
  '&near=' + req.body.city + ',' + req.body.state + ',US&radius=50' + apiKey;
  console.log(queryURL);
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
      res.send(body);
    } 
  });
});

module.exports = router;
