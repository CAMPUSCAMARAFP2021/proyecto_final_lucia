var express = require('express');
var router = express.Router();

var teamController = require('../controllers/team')
var matchRouter = require('./matches')
var playerRouter = require('./player')


router.get('/', async function(req, res) {
    const teams = await teamController.getTeams();
    res.json(teams);
});

router.post('/',async(req, res) => {
    const {team} = req.body;
    const result =  await teamController.createTeam(team);
    res.json(result);
});


router.use('/:teamId/matches', async (req, res, next) => {
    const {teamId} = req.params;
    req.team = await teamController.getTeam(teamId);
    console.log(req.team)
    next();
} ,matchRouter);

router.use('/:teamId/player', async (req, res, next) => {
    const { teamId} = req.params;
    req.player = await teamController.getTeam(teamId);
    next();
} ,playerRouter);


router.delete('/:teamId', async(req,res) => {
    const {teamId} = req.params;
    const result = await teamController.deleteTeam(teamId);
    res.json(result);
});

module.exports = router;