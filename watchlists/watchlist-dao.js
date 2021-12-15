const watchlistModel = require('./watchlist-model');

const findAllWatchlists = () =>
  watchlistModel.find();

const findWatchlistByID = (userId) =>
  watchlistModel.findById(userId);

// const findByUsernameAndPassword = ({username, password}) =>
//   watchlistModel.findOne({username, password});

const createWatchlist = (watchlist) =>
  watchlistModel.create(watchlist);

const updateWatchlist = (user) =>
  watchlistModel.updateOne({_id: user._id}, {
    $set: user
  });

const deleteWatchlist = (watchlistId) =>
  watchlistModel.deleteOne({_id: watchlistId});

module.exports = {
   findAllWatchlists, findWatchlistByID,
  createWatchlist, updateWatchlist, deleteWatchlist
};
