var router = require('express').Router();
var playersController = require('../controllers/player');
var matchRouter = require('./matches')

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
    
    const player = await playersController.getPlayers({"_id": "621678982b200fada0b5cfa1"});
    res.json(player);
})

router.use('/:playerId/matches', async (req, res, next) => {
    const {playerId} = req.params;
    console.log(playerId)
    req.author = await playersController.getPlayers();
    next();
} ,matchRouter);


// router.delete('/:plaerId', async(req,res) => {
//     const {playerId} = req.params;
//     const result = await playersController.(playerId);
//     res.json(result);
// });

module.exports = router;