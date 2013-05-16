module.exports = function (app) {
var signup = require('./controllers/signup');
  app.get('/signup', signup.form);
  app.post('/signup/add', signup.add);

var login = require('./controllers/login');
  app.get('/login', login.form);
  app.post('/login/validate', login.validate);

var index = require('./controllers/index');
  app.get('/index', index.display);
}
