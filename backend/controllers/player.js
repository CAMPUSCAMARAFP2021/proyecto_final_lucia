const Player = require('../models/player');

const createPlayer = async (match) => {
    return await Player.create(match);
}
const getPlayers = async (plaerId) => {
    return await Player.find(plaerId)
}

module.exports = {
    createPlayer,
    getPlayers
}