module.exports = function (app) {
var users = require('./controllers/users');
var phonebook = require('./controllers/phonebook');
  app.get('/users', users.list);
  app.post('/users/add', users.add);
  app.get('/users/:uid', users.findById);
  app.get('/phones', phonebook.list);
  /*app.get('/api', function (req,res) {
    var obj = {
      spam: 'test'
    }
    res.send(obj);
  });*/
}
