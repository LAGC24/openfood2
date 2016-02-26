/**
 * Created by Edmundo on 2/23/2016.
 */

var express = require('express');
var app = express();

// App settings.
app.set('viewsDir', __dirname + '/public'); // Later, move all and change to /views


// Set middleware.
app.use(express.static('public'));


// Routing

// Root.
var routeRoot = require('./routes/root');
app.get('/', routeRoot.root);
app.get('/results', routeRoot.root);

// Root's Results.
var resultRouter = require('./routes/results');
app.use('/results', resultRouter);

// Todo: rest of routes... (dont forget to change the relative paths to start/be relative to root. E.g. index.html to /, or usuario.html to /user)
// Rest of routes.
var routeLogin = require('./routes/login');
var routeRegister = require('./routes/register');
var userRouter = require('./routes/user');
var routeCart = require('./routes/cart');
app.get('/carrito', routeCart.root);
app.get('/login', routeLogin.root);
app.use('/usuario', userRouter);
app.get('/registro', routeRegister.root);


// Config and launch.
var port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() {
  console.log('Running Express, running on port ', port)
});
