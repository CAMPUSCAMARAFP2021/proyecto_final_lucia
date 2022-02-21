const Team = require('../models/team');

const createTeam = async(team) => {
    return await Team.create(team);
}
const getTeams = async () => {
     return await Team.find()
}

module.exports = {
    createTeam,
    getTeams
}