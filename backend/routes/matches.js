const express = require('express');

const router = express.Router();

const matchController = require('../controllers/match')


router.post('/', async (req, res) => {
    const { match } = req.body;
    const result = await matchController.createMatch(match);
    res.json(result);
});


router.delete('/:matchId', async (req, res) => {
    const { matchId } = req.params;
    const result = await matchController.deleteMatch(matchId);
    res.json(result);
});


router.get('/', async function(req, res) {
    console.log(req.player)
    const matches = req.player ? await matchController.getMatchsbyPlayer(req.player) : (req.team ? await matchController.getMatchsbyTeam(req.team):await matchController.getMatch());
    res.json(matches);
});


module.exports = router;

