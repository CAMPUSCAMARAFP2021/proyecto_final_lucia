const Team = require('../models/team');

const createTeam = async(team) => {
    return await Team.create(team);
}
const getTeams = async () => {
     return await Team.find()
}
const deleteTeam = async(teamId)=> {
    const team = await Team.findByIdAndDelete(teamId);
    return false;
}

module.exports = {
    createTeam,
  getTeams,
   deleteTeam
}