var express = require('express');

var router = express.Router();

var fieldController = require('../controllers/field')

router.get('/', async function(req, res) {

    const fields = await fieldController.getFields();
    res.json(fields);

});
router.post('/',async(req, res) => {
    const { field} = req.body;
    const result =  await fieldController.createField(field);
    res.json(result);
});

router.delete('/:fieldId', async(req,res) => {

    const { fieldId} = req.params;
    const result = await fieldController.deleteField(fieldId);
    res.json(result);

});

module.exports = router;
