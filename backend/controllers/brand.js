
const Brand = require('../models/brand');

const createBrand = async(brand) => {
return await Brand.create(brand);}

const getBrand = async () => {     
    return await Brand.find()}


module.exports = { 
     createBrand,    
     getBrand}

