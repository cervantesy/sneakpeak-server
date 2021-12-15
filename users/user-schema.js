const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  website: String,
  avatar: String,
  admin: Boolean,
}, {collection: 'users'});
module.exports = userSchema;