
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
const getPlayers = async (playerId) => {
    return await Player.findById(playerId)
}
const getPlayersbyTeam = async(team) =>{
    return await Player.find({team}).populate("teams")
}


module.exports = { 
     createPlayer,    
     getPlayer,
    deletePlayer,
    getPlayers,
    getPlayersbyTeam
    }

