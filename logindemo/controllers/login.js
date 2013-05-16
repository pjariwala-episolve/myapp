var mongoose = require('mongoose'), Signup = mongoose.model('Signup');

exports.form = function (req, res) {
  res.render('login', {
      title: 'User Login',
      username: '',
      validate: 0,
    });
}

exports.validate = function (req, res) {
  Signup.find({ username: req.body.username, password: req.body.password }, function (err, user) {
      if(err) {
	console.log(err);
      }
      else
      {
        if(user[0]) 
	{
		res.redirect('/index');
      		/*res.render('index', {
      		username: user[0].username,
      		title: 'Login Successful!',
      		validate: 1,
    		});*/
        }
	else
	{
		res.render('login', {
                //_id: userinfo._id,
                username: '',
                title: 'User Login',
                validate: 1,
                });
	}
      }
 });
}
