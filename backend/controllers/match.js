
const Match = require('../models/match');

const createMatch = async(match) => {
    return await Match.create(match);
}

const deleteMatch = async (matchId) => {     
    const team = await Match.findByIdAndDelete(matchId);
    return false;

}
const getMatchs = async (matchId) => {
    return await Match.findById(matchId);
}
const getMatch = async () => {     
    return await Match.find()
}
const getMatchsbyPlayer = async(player) =>{
    return await Match.find({player}).populate("players")
}
const getMatchsbyTeam = async(team) =>{
    return await Match.find({team}).populate("teams")
}

module.exports = { 
     createMatch,    
      getMatch,
     deleteMatch,
     getMatchs,
     getMatchsbyPlayer,
     getMatchsbyTeam
    }

