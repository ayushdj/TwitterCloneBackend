const whoDao = require("./who-dao");

module.exports = (app) => {

    const findAllWho = (req, res) =>
        whoDao.findAllWho().
            then(who => res.json(who));


    app.get("/rest/who", findAllWho);
}
