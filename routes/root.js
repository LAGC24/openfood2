/**
 * Created by Edmundo on 2/24/2016.
 */

exports.root = function(req, res) {
  //resp.sendFile(__dirname + '/public/index.html');
  res.sendFile(req.app.get('viewsDir') + '/index.html');
};
