const watchlistDao = require('../watchlists/watchlist-dao');

module.exports = (app) => {
    const findAllWatchlists = (req, res) =>
        watchlistDao.findAllWatchlists()
            .then(watchlists => res.json(watchlists));

    const findWatchlistById = (req, res) =>
        watchlistDao.findWatchlistByID(req.params.id)
            .then(watchlist => res.json(watchlist));

    const deleteWatchlist = (req, res) =>
        watchlistDao.deleteWatchlist(req.params.id)
            .then(status => res.send(status));

    const updateWatchlist = (req, res) =>
        watchlistDao.updateWatchlist(req.body)
            .then(status => res.send(status));


    const createWatchlist = (req, res) => {
        watchlistDao.createWatchlist(req.body)
            .then((insertedWatchlist) => res.json(insertedWatchlist));
    }


    app.post('/api/watchlists', createWatchlist);
    app.get('/api/watchlists/:id', findWatchlistById);
    app.put('/api/watchlists/:id', updateWatchlist);
    app.delete('/api/watchlists/:id', deleteWatchlist);
    app.get('/api/watchlists', findAllWatchlists);
};