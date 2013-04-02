var mongoose = require('mongoose'), Schema = mongoose.Schema;
var PhonebookSchema = new Schema({
  _id: Number,
  name: String
});
mongoose.model('Phonebook', PhonebookSchema);
