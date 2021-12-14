const mongoose = require('mongoose');
const followingSchema = require('./following-schema');
const followingModel = mongoose
    .model('FollowingModel', followingSchema);
module.exports = followingModel;
