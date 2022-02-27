var express = require('express');

var router = express.Router();

var playerController = require('../controllers/player')

router.get('/', async function(req, res) {

    const players = await playerController.getPlayer();
    res.json(players);

});



router.post('/',async(req, res) => {

    const {player} = req.body;
    const result =  await playerController.createPlayer(player);
    res.json(result);

});




router.delete('/:playerId', async(req,res) => {

    const {playerId} = req.params;
    const result = await playerController.deletePlayer(playerId);
    res.json(result);

});



module.exports = router;

