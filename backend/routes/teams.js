var express = require('express');
var router = express.Router();

var teamController = require('../controllers/team')


router.get('/', async function(req, res) {
    const teams = await teamController.getTeams();
    res.json(teams);
});

router.post('/',async(req, res) => {
    const {team} = req.body;
    const result =  await teamController.createTeam(team);
    res.json(result);
});

module.exports = router;