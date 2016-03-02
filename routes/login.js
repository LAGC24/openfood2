/**
 * Created by LAGC24 on 2/25/2016.
 */

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser').urlencoded({ extended: false });

router.route('/')
  .get(function(req, res) {
    res.sendFile(req.app.get('viewsDir') + '/login.html');
  })
  .post(bodyParser, function(req, res) {

    console.log(req.body);

    res.sendFile(req.app.get('viewsDir') + '/login.html');
  });

module.exports = router;
