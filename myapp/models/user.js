var mongoose = require('mongoose'), Schema = mongoose.Schema;
var UserSchema = new Schema({
  _id: Number,
  name: {first: String, last: String}
});
mongoose.model('User', UserSchema);
