var mongoose = require('mongoose')
  , Phonebook = mongoose.model('Phonebook');

exports.list = function(req, res) {
	//res.render('user',{title:'Users List'});
  //res.send(Phonebook);
  console.log(Phonebook);
  Phonebook.find({}, function(err, phonebook) {
  //if (err) return handleError(err);
  res.render('phonebook', {
      title: 'Phones List',
      phonebook: phonebook,
    });
 });
}
