var router = require('express').Router();
var playersController = require('../controllers/player');

var matchRouter = require('./matches');

router.post('/',async(req, res) => {
    const {player} = req.body;
    const result =  await playersController.createPlayer(player);
    res.json(result);
});


// router.post('/login',async(req, res) => {
//     const {user, password} = req.body;
//     const result = await playersController.login(user, password);
//     res.json(result);
// });

router.get('/', async(req, res) => {
    const players = await playersController.getPlayers();
    res.json(players);
})

router.get('/:playerId', async(req, res) => {
    const { playerId} = req.params;
    const author = await playersController.getPlayer(playerId);
    res.json(author);
})

router.use('/:playerId/matches', async (req, res, next) => {
    const {playerId} = req.params;
    req.player = await playersController.getPlayer(playerId);
    next();
} ,matchRouter);


router.delete('/:playerId', async(req,res) => {
    const {playerId} = req.params;
    const result = await playersController.deletePlayer(playerId);
    res.json(result);
});

module.exports = router;