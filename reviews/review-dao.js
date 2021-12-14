const reviewModel = require('./review-model');

const findAllReviews = () =>
  reviewModel.find();

const findReviewByID = (userId) =>
  reviewModel.findById(userId);

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
   findAllReviews, findReviewByID,
  createReview, updateReview, deleteReview
};
