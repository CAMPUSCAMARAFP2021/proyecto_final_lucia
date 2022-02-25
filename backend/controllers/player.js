const Player = require('../models/player');

const createPlayer = async (match) => {
    return await Player.create(match);
}

/**get all players */
const getPlayers = async () => {
    return await Player.find();
}

/**get specific player */
const getPlayer = async (plaerId) => {
    return await Player.findById(plaerId);
}

module.exports = {
    createPlayer,
    getPlayers,
    getPlayer
}
