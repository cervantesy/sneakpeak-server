const mongoose = require('mongoose');
const watchlistSchema = mongoose.Schema({
  username: String,
  watchlist: [{imdbID: String,
  title: String,
  poster: String}]
}, {collection: 'watchlists'});
module.exports = watchlistSchema;