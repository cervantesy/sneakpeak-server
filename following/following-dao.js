const friendModel = require('./following-model');

const findAllFriends = () =>
    friendModel.find();

const createFriend = (friend) =>
    friendModel.create(friend);

const deleteFriend = (id) =>
    friendModel.deleteOne({_id:id});

const findFriendById = (id) =>
    friendModel.findById(id);


module.exports = { findAllFriends, createFriend, deleteFriend, findFriendById}