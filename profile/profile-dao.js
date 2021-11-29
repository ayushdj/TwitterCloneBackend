const model = require('./profile-model');

const findAllProfile = () => model.find();

const findProfileById = (id) => model.findById(id);

const updateProfile = (id, newProfile) =>
    model.updateOne({_id:id},
        {$set: newProfile});

module.exports = {
    findAllProfile, updateProfile, findProfileById
}