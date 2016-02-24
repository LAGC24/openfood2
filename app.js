/**
 * Created by Edmundo on 2/23/2016.
 */

var express = require('express');
var app = express();

app.get('/', function(req, resp) {
  resp.sendFile(__dirname + '/app/index.html');
});


app.use(express.static('app'));


var port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() {
  console.log('Running Express, running on port ', port)
});
