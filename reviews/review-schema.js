const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
  username: String,
  imdbID: String,
  title: String,
  poster: String,
  review: String
}, {collection: 'reviews'});
module.exports = reviewSchema;