const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
    slogan:   String,
    matches: [
      {type: Schema.Types.ObjectId, ref:'March'}
  ],
    anthem: String,
    img: String
  },
  );

const Team = model('Team', schema);

module.exports = Team;