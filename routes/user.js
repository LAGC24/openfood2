/**
 * Created by LAGC24 on 2/25/2016.
 */

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser').urlencoded();


// Refers, for example, to: '/user/'.
router.route('/')
  .get(function(req, res) {
    res.sendFile(req.app.get('viewsDir') + '/usuario.html');
  })
  .post(bodyParser, function(req, res) {
    res.sendFile(req.app.get('viewsDir') + '/usuario.html');

    console.log(req.body);
  });

module.exports = router;
