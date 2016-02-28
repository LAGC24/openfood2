/**
 * Created by Edmundo on 2/23/2016.
 */

var express = require('express');
var app = express();

// Set DB.
var mongoUtil = require('./utils/mongoUtil');
mongoUtil.connect();

// App settings.
app.set('viewsDir', __dirname + '/views'); // Later, move all and change to /views
app.set('staticDir', __dirname + '/static');


// Set middleware.
app.use(express.static('public'));
// Idea, middleware to remove .html (and log them)


// Routing
var routeRoot       = require('./routes/root');
var resultRouter    = require('./routes/results');
var routeLogin      = require('./routes/login');
var routeRegister   = require('./routes/register');
var userRouter      = require('./routes/user');
var routeCart       = require('./routes/cart');

// Root.
app.get('/', routeRoot.root);
//app.get('/results', routeRoot.root);

// Root's Results.
app.use('/results', resultRouter);

// Todo: rest of routes... (dont forget to change the relative paths to start/be relative to root. E.g. index.html to /, or usuario.html to /user)
// Rest of routes.
app.get('/login', routeLogin.root);
app.get('/registro', routeRegister.root);
app.use('/usuario', userRouter);
app.get('/carrito', routeCart.root);
app.get('/detalles-pago', function(req, res) {
  res.sendFile(req.app.get('viewsDir') + '/detalles-pago.html');
});
app.get('/password-reset', function(req, res) {
  res.sendFile(req.app.get('viewsDir') + '/password-reset.html');
});
app.get('/password-reset-change', function(req, res) {
  res.sendFile(req.app.get('viewsDir') + '/password-reset-change.html');
});


// Config and launch.
var port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() {
  console.log('Running Express, running on port', port)
});
