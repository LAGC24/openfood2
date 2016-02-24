/**
 * Created by Edmundo on 2/23/2016.
 */

var express = require('express');
var app = express();

// App settings.
app.set('viewsDir', __dirname + '/app'); // Later, move all and change to /views



app.use(express.static('app'));


// Routing
var routeRoot = require('./routes/root');
var routeResult = require('./routes/results');

// Root.
app.get('/', routeRoot.root);
app.get('/results', routeRoot.root);

// Root's Results.
app.get('/results/:category', routeResult.viewCategory);
app.get('/results/:category/:restaurant', routeResult.viewRestaurant);
// Idea app.get('/results/:category/:restaurant/details', routeResult.viewRestaurantDetails);

// Todo: rest of routes... (dont forget to change the relative paths to start/be relative to root. E.g. index.html to /, or usuario.html to /user)



var port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() {
  console.log('Running Express, running on port ', port)
});
