const reviewDao = require('../reviews/review-dao');

module.exports = (app) => {
    const findAllReviews = (req, res) =>
        reviewDao.findAllReviews()
            .then(reviews => res.json(reviews));

    const findReviewById = (req, res) =>
        reviewDao.findReviewByID(req.params.id)
            .then(review => res.json(review));

    const findReviewByUsername = (req, res) =>
        reviewDao.findReviewByUsername(req.params.id)
            .then(reviews => res.json(reviews));


    const deleteReview = (req, res) =>
        reviewDao.deleteReview(req.params.id)
            .then(status => res.send(status));

    const updateReview = (req, res) =>
        reviewDao.updateReview(req.body)
            .then(status => res.send(status));


    const createReview = (req, res) => {
        reviewDao.createReview(req.body)
            .then((insertedReview) => res.json(insertedReview));
    }


    app.post('/api/reviews', createReview);
    app.get('/api/reviews/:id', findReviewById);
    app.get('/api/reviews/username/:id', findReviewByUsername);
    app.put('/api/reviews/:id', updateReview);
    app.delete('/api/reviews/:id', deleteReview);
    app.get('/api/reviews', findAllReviews);
};