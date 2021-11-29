const tweetDao = require('./tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        tweetDao.findAllTweets()
            .then(tweets => res.json(tweets));

    const deleteTweet = (req, res) => {
        tweetDao.deleteTweet(req.params.id).then((status) => res.send(status));
    }

    const createTweet = (req, res) => {
        tweetDao.createTweet(req.body).then((insertedTweet) => res.json(insertedTweet));
    }

    const likeTweet = (req, res) => {
        tweetDao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));
    }

    app.get("/rest/tweets", findAllTweets);
    app.delete("/rest/tweets/:id", deleteTweet);
    app.post("/rest/tweets", createTweet);
    app.put("/rest/tweets/:id", likeTweet);
}