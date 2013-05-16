var mongoose = require('mongoose'), Signup = mongoose.model('Signup');

exports.display = function (req, res) {
  res.render('index', {
      title: 'Home Page',
    });
}
