var router = require('express').Router();
var playersController = require('../controllers/player');

router.post('/',async(req, res) => {
    const {player} = req.body;
    const result =  await playersController.createPlayer(player);
    res.json(result);
});


router.get('/', async(req, res) => {
    const {player} = req;
    const players = await playersController.getPlayers(player);
    res.json(players);
})

router.get('/:playerId', async(req, res) => {
    const {playerId} = req.params;
    const player = await playersController.getPlayers(playerId);
    res.json(player);
})

// router.delete('/:plaerId', async(req,res) => {
//     const {playerId} = req.params;
//     const result = await playersController.(playerId);
//     res.json(result);
// });

module.exports = router;