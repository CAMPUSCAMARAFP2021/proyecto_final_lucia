var express = require('express');
var router = express.Router();

var teamController = require('../controllers/team')
var matchesController = require('../controllers/match')
var playersRouter = require('./player');
var matchRouter = require('.')


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


router.delete('/:teamId', async(req,res) => {
    const {teamId} = req.params;
    const result = await teamController.deleteTeam(teamId);
    res.json(result);
});

module.exports = router;