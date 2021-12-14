const followingDao = require('../following/following-dao');


module.exports = (app) => {
    const findAllFriends = (req, res) =>
        followingDao.findAllFriends()
            .then(users => res.json(users));

    const findFriendById = (req, res) =>
        followingDao.findFriendById(req.userId)
            .then(user => res.json(user));

    const deleteFriend = (req, res) =>
        followingDao.deleteFriend(req.params.userId)
            .then(status => res.send(status));

    const createFriend = (req, res) =>
        followingDao.createTweet(req.body)
            .then(tweet => res.json(tweet));



    // const register = (req, res) => {
    //     userDao.findByUsername(req.body)
    //         .then(user => {
    //             if(user) {
    //                 res.sendStatus(404);
    //                 return;
    //             }
    //             userDao.createUser(req.body)
    //                 .then(user => {
    //                     req.session['profile'] = user;
    //                     res.json(user)
    //                 });
    //         })
    // }


    app.post('/api/following', createFriend);
    app.delete('/api/following/:friendId', deleteFriend);
    app.get('/api/following', findAllFriends);
    app.get('/api/following/:friendId', findFriendById);
};