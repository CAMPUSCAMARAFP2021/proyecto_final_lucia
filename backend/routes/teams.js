var express = require('express');
var router = express.Router();
var teamController = require('../controllers/team')
/* GET users listing. */
router.get('/', function(req, res, next) {
    teamController.
  res.send('respond with a resource');
});

module.exports = router;