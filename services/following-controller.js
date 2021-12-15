const followingDao = require('../following/following-dao');


module.exports = (app) => {
    const findAllFriends = (req, res) =>
        followingDao.findAllFriends()
            .then(users => res.json(users));

    const findFollowingByUsername = (req, res) =>
        followingDao.findFollowingByUsername(req.userId)
            .then(user => res.json(user));

    const deleteFriend = (req, res) =>
        followingDao.deleteFriend(req.params.userId)
            .then(status => res.send(status));

    const createFriend = (req, res) =>
        followingDao.createFriend(req.body)
            .then(tweet => res.json(tweet));

    const updateFollowing = (req, res) =>
        followingDao.updateFollowing(req.params.id,req.body)
            .then(status => res.send(status));

    const addFriend= (req,res) =>
        followingDao.findFollowingByUsername(req.body).then(
            username => {
                if(username === {}){
                    console.log('empty');
                }
                else if(username) {
                    followingDao.updateFollowing(req.body).then(status => res.send(status));
                } else {
                    followingDao.createFollowing(req.body).then(status => res.send(status));
                }
            }
        )



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


    app.post('/api/following', addFriend)
    app.put('/api/following/:userId', updateFollowing);
    app.post('/api/following', createFriend);
    app.delete('/api/following/:userId', deleteFriend);
    app.get('/api/following', findAllFriends);
    app.get('/api/following/:userId', findFollowingByUsername);
};