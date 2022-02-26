const Match = require('../models/match');

const createMatch = async (match) => {
    return await Match.create(match);
}
const getMatchs = async () => {
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
    getMatchs,
    getMatchsbyPlayer,
    getMatchsbyTeam
}