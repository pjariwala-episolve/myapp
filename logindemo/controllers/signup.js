var mongoose = require('mongoose'), Signup = mongoose.model('Signup');

exports.form = function (req, res) {
  res.render('signup', {
      title: 'User Signup',
    });
}

exports.add = function (req, res) {
  //console.log(req.body.username);
  //console.log(req.body.password);
  var siup = new Signup({username: req.body.username, password: req.body.password});
  siup.save(function (err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/signup');
    }
 });
}
