const Match = require('../models/match');

const createMatch = async (match) => {
    return await Match.create(match);
}
const getMatchs = async () => {
    return await Match.find()
}

module.exports = {
    createMatch,
    getMatchs
}