var mongoose = require('mongoose')
  , User = mongoose.model('User');

exports.list = function(req, res) {
  User.find({}, function(err, users) {
  res.render('user', {
      title: 'Manage Users',
      users: users,
      _id: '',
      firstname: '',
      lastname: '',
    });
 });
}

exports.add = function (req, res) {
  var user = new User({ _id: req.body._id, name: {first: req.body.first, last: req.body.last} });
  user.save(function (err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/users');
    }
 });
}

exports.update = function (req, res) {
  User.findOneAndUpdate({_id : req.params.uid}, {name: {first: req.body.first, last: req.body.last}},
  function(err, user) {
    res.redirect('/users');
  });
}

exports.del = function (req, res) {
  User.findByIdAndRemove({_id : req.params.uid},
  function(err, user) {
    res.redirect('/users');
  });
}

exports.findById = function (req, res) {
  User.findOne({ _id: req.params.uid }, function (err, user) {
      res.render('user', {
      _id: user._id,
      firstname: user.name.first,
      lastname: user.name.last,
      title: 'Manage Users',
    });
 });
}
