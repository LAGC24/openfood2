/**
 * Created by Edmundo on 2/23/2016.
 */

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');         // Logger.
var app = express();


// Set DB.
var mongoUtil = require('./utils/mongoUtil');
mongoUtil.connect();

// App settings.
app.set('view engine', 'ejs');
app.set('viewsDir', __dirname + '/views');
app.set('staticDir', __dirname + '/static');

// Set middleware.
app.use(morgan('combined', { skip: function (req, res) { return res.statusCode < 400 } })); // Log errors only.
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico', {maxAge: 60 * 60 * 24 * 1000})); // maxAge 1 day
// Idea, middleware to remove .html (and log them)


// Routing
var routeRoot       = require('./routes/root');

var resultRouter    = require('./routes/results');

var loginRouter     = require('./routes/login');
var registerRouter  = require('./routes/register');
var userRouter      = require('./routes/user');
var cartRouter      = require('./routes/cart');

// Root.
app.get('/', routeRoot.root);
//app.get('/results', routeRoot.root);

// Root's Results.
app.use('/results', resultRouter);

// Rest of routes.
app.use('/login', loginRouter);
app.use('/registro', registerRouter);
app.use('/usuario', userRouter);
app.use('/carrito', cartRouter);

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
