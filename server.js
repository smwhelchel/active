var express = require('express');
var app = express();
var post = require('./public/js/app.js');
var api = require('./public/js/app.js');
var bodyParser = require('body-parser')

//app.use('/api', api);

app.use(express.static('public'));

app.listen(1337);
console.log('server listening');