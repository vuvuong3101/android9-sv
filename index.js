var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hottie = require('hoties');

mongoose.connect('mongodb://<admin>:<admin>@ds049651.mlab.com:49651/serverapp',{useMongoClient: true});
////

var hottie = new Hottie({
  name : "LinkKA",
  age : 19,
  image : "http://asssddad.net"
});
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/api', function(req, res) {} );
  res.json({'hello' :'world'});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
