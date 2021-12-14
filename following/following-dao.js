const friendModel = require('./following-model');

const findAllFriends = () =>
    friendModel.find();

const createFollowing = (username) =>
    friendModel.create(username);

const deleteFriend = (id) =>
    friendModel.deleteOne({_id:id});

const findFollowingByUsername = (username) =>
    friendModel.findById(username);


const updateFollowing = (user) =>
    friendModel.updateOne({username:user.username},
        {$set: update});






module.exports = {
    findAllFriends, createFollowing, deleteFriend,
    findFollowingByUsername, updateFollowing}