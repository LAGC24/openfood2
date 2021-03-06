/**
 * Created by Edmundo on 2/24/2016.
 *
 * Also sends JSON by using the Accepts header from the client (defaults to json when using ajax).
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation
 */

var express = require('express');
var router = express.Router();


// Todo: Log any param not found on DB.. (it maybe a broken link or a misstyped element) or catch 404 errors
// Todo: get the results json from a specific url with params (/api/result?cat&rest), with the same custom url (/:cat..) but with getType=json, or with custom url plus api param (/:cat../api or /:cat..?api)

// Refers, for example, to: '/results/'.
router.route('/')
  .get(function(req, res) {
    // Check if accepts application/json MIME.
    if (req.accepts('application/json')) {
      res.sendFile(req.app.get('staticDir') + '/categories.json');
    }
    else {
      res.sendFile(req.app.get('viewsDir') + '/index.html');
    }
  });

router.route('/category/:category')
  .get(function(req, res) {
    // Check if accepts application/json MIME.
    if (req.accepts('application/json')) {
      res.sendFile(req.app.get('staticDir') + '/restaurants.json');
    }
    else {
      console.log('Category: ', req.params.category);
      res.sendFile(req.app.get('viewsDir') + '/index.html'); // Todo: see if there is a wey to reuse the root path response (wildcard, app.use, middleware?)
    }
  });

router.route('/category/:category/restaurant/:restaurant')
  .get(function(req, res) {
    // Check if accepts application/json MIME.
    if (req.accepts('application/json')) {
      res.json({'response': 'not implemented yet'});
    }
    else {
      console.log('Category: ', req.params.category, 'Restaurant: ', req.params.restaurant);
      res.sendFile(req.app.get('viewsDir') + '/index.html');
    }
  });

// Idea app.get('/results/:category/:restaurant/details', routeResult.viewRestaurantDetails);


module.exports = router;
