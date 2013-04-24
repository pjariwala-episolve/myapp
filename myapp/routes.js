module.exports = function (app) {
var users = require('./controllers/users');
var phonebook = require('./controllers/phonebook');
  app.get('/users', users.list);
  app.post('/users/add', users.add);
  app.get('/users/:uid', users.findById);
  app.post('/users/update/:uid', users.update);
  app.get('/users/delete/:uid', users.del);
  app.get('/phones', phonebook.list);
}
