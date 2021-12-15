const reviewModel = require('./review-model');

const findAllReviews = () =>
  reviewModel.find();

const findReviewByID = (Id) =>
  reviewModel.findById(Id);

const findReviewByUsername = (user) =>
    reviewModel.find({username: user});

// const findByUsernameAndPassword = ({username, password}) =>
//   reviewModel.findOne({username, password});

const createReview = (review) =>
  reviewModel.create(review);

const updateReview = (user) =>
  reviewModel.updateOne({_id: user._id}, {
    $set: user
  });

const deleteReview = (reviewId) =>
  reviewModel.deleteOne({_id: reviewId});

module.exports = {
   findAllReviews, findReviewByID, findReviewByUsername,
  createReview, updateReview, deleteReview
};
