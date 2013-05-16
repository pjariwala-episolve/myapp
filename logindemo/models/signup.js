var mongoose = require('mongoose'), Schema = mongoose.Schema;
var SignupSchema = new Schema({
  _id: Number,
  username: String,
  password: String
});
mongoose.model('Signup', SignupSchema, 'userinfo');
