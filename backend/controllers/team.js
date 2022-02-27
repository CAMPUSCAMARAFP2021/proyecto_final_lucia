
const Team = require('../models/team');

const createTeam = async(team) => {
    return await Team.create(team);
}

const deleteTeam = async (teamId) => {     
    const team = await Team.findByIdAndDelete(teamId);
    return false;
}

    const getTeams = async () => {
        return await Team.find();
    }
    
    /**get specific player */
    const getTeam = async (plaerId) => {
        return await Team.findById(plaerId);
    }

module.exports = { 
    createTeam,    
   getTeam,
   getTeams,
     deleteTeam
    }

