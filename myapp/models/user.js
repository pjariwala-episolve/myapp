var mongoose = require('mongoose'), Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {first: String, last: String}
});
mongoose.model('User', UserSchema);
