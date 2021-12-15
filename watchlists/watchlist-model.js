const mongoose = require('mongoose');
const watchlistSchema = require('./watchlist-schema');
const watchlistModel = mongoose
  .model('WatchlistModel', watchlistSchema);
module.exports = watchlistModel;
