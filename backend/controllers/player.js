const Player = require('../models/player');

const createPlayer = async (match) => {
    return await Player.create(match);
}
const getPlayers = async () => {
    return await Player.find()
}

module.exports = {
    createPlayer,
    getPlayers
}