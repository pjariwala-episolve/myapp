var mongoose = require('mongoose')
  , User = mongoose.model('User');

exports.list = function(req, res) {
	//res.render('user',{title:'Users List'});
  User.find({}, function(err, users) {
  //console.log(users);
  res.render('user', {
      title: 'Users List',
      users: users
    });
 });
}
