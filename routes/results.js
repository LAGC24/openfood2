/**
 * Created by Edmundo on 2/24/2016.
 */

// Todo: Log any param not found on DB.. (it maybe a broken link or a misstyped element) or catch 404 errors
// Todo: get the results json from a specific url with params (/api/result?cat&rest), with the same custom url (/:cat..) but with getType=json, or with custom url plus api param (/:cat../api or /:cat..?api)

exports.viewCategory = function(req, res) {
  console.log('Category: ', req.params.category);
  res.sendFile(req.app.get('viewsDir') + '/index.html'); // Todo: see if there is a wey to reuse the root path response (wildcard, app.use, middleware?)
};

exports.viewRestaurant = function(req, res) {
  console.log('Category: ', req.params.category, 'Restaurant: ', req.params.restaurant);
  res.sendFile(req.app.get('viewsDir') + '/index.html');
};
