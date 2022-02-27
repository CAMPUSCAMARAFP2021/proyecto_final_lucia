
const Player = require('../models/player');

const createPlayer = async(player) => {
    return await Player.create(player);
}

const deletePlayer = async (playerId) => {     
    const team = await Player.findByIdAndDelete(playerId);
    return false;

}


const getPlayer = async () => {     
    return await Player.find()
}


module.exports = { 
     createPlayer,    
     getPlayer,
    deletePlayer
    }

