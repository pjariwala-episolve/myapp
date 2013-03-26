module.exports = function (app) {
var users = require('./controllers/users');
  app.get('/users/', users.list);
  app.get('/api', function (req,res) {
    var obj = {
      spam: 'test'
    }
    res.send(obj);
  });
}
