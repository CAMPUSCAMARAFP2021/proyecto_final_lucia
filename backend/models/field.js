const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
    // matches:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Match'
    // },
    description:   String,
    place: String,
    sports: String,
  },
  );

const Field = model('Field', schema);

module.exports = Field;