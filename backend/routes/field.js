var express = require('express');

var router = express.Router();

var fieldController = require('../controllers/field')
var matchRouter = require('./matches')

router.get('/', async function(req, res) {
    const fields = await fieldController.getFields();
    res.json(fields);
});

router.post('/',async(req, res) => {
    const { field} = req.body;
    const result =  await fieldController.createField(field);
    res.json(result);
});

router.use('/:fieldId/matches', async (req, res, next) => {
    const { fieldId} = req.params;
    req.field = await fieldController.getField(fieldId);
    console.log(req.team)
    next();
} ,matchRouter);

router.delete('/:fieldId', async(req,res) => {

    const { fieldId} = req.params;
    const result = await fieldController.deleteField(fieldId);
    res.json(result);

});

module.exports = router;

