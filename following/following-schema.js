const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    following : [
        {friend: String}
    ]
}, {collection: 'following'});
module.exports = userSchema;