const Team = require('../models/team');

const createTeam = async(team) => {
    return await Team.create(team);
}
const getTeam = async () => {
    return await Team.find();
}

module.exports = {
    createTeam,
}