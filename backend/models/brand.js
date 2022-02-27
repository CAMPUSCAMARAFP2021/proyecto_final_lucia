const {model, Schema} = require('mongoose');

const schema = new Schema({

  

    name:  String

  },

  );

const Brand = model('Brand', schema);

module.exports = Brand;