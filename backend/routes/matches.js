var express = require('express');
var router = express.Router();

var matchController = require('../controllers/match')


router.get('/', async function(req, res) {
    console.log(req.player)
    const matches = req.player ? await matchController.getMatchsbyPlayer(req.player) : await matchController.getMatchs();
    res.json(matches);
});

router.get('/', async function(req, res) {
    console.log(req.team)
    const teams = req.team ? await matchController.getMatchsbyTeam(req.team) : "noo";
    res.json(teams);
});

router.post('/',async(req, res) => {
    const {match} = req.body;
    const result =  await matchController.createMatch(match);
    res.json(result);
});

router.get('/:matchId', async(req, res) => {
    const {matchId} = req.params;
    const match = await matchController.getMatch(matchId);
    res.json(match);
})

router.get('/', async function(req, res) {
    const matches = await matchController.getMatchs();
    res.json(matches);
});
// router.delete('/:matchId', async(req,res) => {
//     const {matchId} = req.params;
//     const result = await matchController.(matchId);
//     res.json(result);
// });

module.exports = router;