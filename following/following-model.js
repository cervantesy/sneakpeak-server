const mongoose = require('mongoose');
const followingSchema = require('./following-schema');
const followingModel = mongoose
    .model('UserModel', followingSchema);
module.exports = followingModel;
