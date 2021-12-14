const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    following : Array(String)
}, {collection: 'following'});
module.exports = userSchema;