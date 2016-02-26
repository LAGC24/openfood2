/**
 * Created by LAGC24 on 2/25/2016.
 */
exports.root = function(req, res) {
  //resp.sendFile(__dirname + '/app/index.html');
  res.sendFile(req.app.get('viewsDir') + '/usuario.html');
};
