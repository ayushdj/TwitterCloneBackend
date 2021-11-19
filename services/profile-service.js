let profileData = require('../data/profileData.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profileData);
    }

    const updateCurrentProfile = (req, res) => {
        profileData = req.body;
        res.sendStatus(200);
    }
    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile', updateCurrentProfile);
};