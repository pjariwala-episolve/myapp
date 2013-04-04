var mongoose = require('mongoose')
  , User = mongoose.model('User');

exports.list = function(req, res) {
	//res.render('user',{title:'Users List'});
  User.find({}, function(err, users) {
  //console.log(users);
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
      console.log(err)
    } else {
      res.redirect('/users');
      //console.log(user);
    }
 });
}

exports.findById = function (req, res) {
 //res.send(req.params.uid);
 User.findOne({ _id: req.params.uid }, function (err, users) {
      res.render('user', {
      _id: users._id,
      firstname: users.name.first,
      lastname: users.name.last,
      title: 'Manage Users',
    });
 });
 User.find({}, function(err, users) {
    res.render('user', {
      users: users,
   });
 });
}
