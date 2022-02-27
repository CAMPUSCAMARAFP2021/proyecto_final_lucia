var express = require('express');

var router = express.Router();

var matchController = require('../controllers/match')




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
    const matches = req.player ? await matchController.getMatchsbyPlayer(req.player) : await matchController.getMatch();
    res.json(matches);
});


module.exports = router;

