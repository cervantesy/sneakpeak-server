const watchlistModel = require('./watchlist-model');



const findAllWatchlists = () =>
  watchlistModel.find();

const findWatchlistByID = (userId) =>
  watchlistModel.findById(userId);

// const findByUsernameAndPassword = ({username, password}) =>
//   watchlistModel.findOne({username, password});

const createWatchlist = (watchlist) =>
  watchlistModel.create(watchlist);

const findByUsername = (user) =>
    watchlistModel.find({username: user});


const updateWatchlist = (user, movie) =>
  watchlistModel.updateOne({username: user}, {
    $push: {watchlist: {imdbID: movie.imdbID, title: movie.Title, poster: movie.Poster}}
  });

const deleteWatchlist = (watchlistId) =>
  watchlistModel.deleteOne({_id: watchlistId});

module.exports = {
   findAllWatchlists, findWatchlistByID, findByUsername,
  createWatchlist, updateWatchlist, deleteWatchlist
};
