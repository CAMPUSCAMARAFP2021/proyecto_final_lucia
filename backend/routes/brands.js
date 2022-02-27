var express = require('express');

var router = express.Router();

var brandController = require('../controllers/brand')

router.get('/', async function(req, res) {

    const brands = await brandController.getBrand();

    res.json(brands);

});



router.post('/',async(req, res) => {

    const {brand} = req.body;

    const result =  await brandController.createBrand(brand);

    res.json(result);

});


//para eliminar

// router.delete('/:brandId', async(req,res) => {

//     const {brandId} = req.params;

//     const result = await brandController.deleteTask(brandId);

//     res.json(result);

// });



module.exports = router;

