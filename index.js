var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Hottie = require('./models/hoties');

mongoose.connect('mongodb://admin:admin@ds049651.mlab.com:49651/serverapp',{useMongoClient: true});
////

console.log("ahiihi");


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api', function(req, res) {
  res.json({'hello' :'world'});
});


app.get('/api/data' , function(req, res) {

  Hottie.find(function(err, hotties) {
    if (err) {
      res.json({ success : 0 , message : 'Not get DATA'});
    }else {
      res.json(hotties);
    }
  });
});

app.post( '/api/data', function(req, res) {
  var hottie = new Hottie({
    name : req.body.name,
    age : req.body.age,
    image : req.body.image
  });

  hottie.save(function(err, addHotties){
    if(err) {
      res.json({success: 0, message: 'Could not add data' + err});
    }else{
      res.json(addHotties);
    }
  });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
