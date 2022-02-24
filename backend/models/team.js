const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
    slogan:   String,
    players: [
      {type: Schema.Types.ObjectId, ref:'Team'}
  ],
    anthem: String,
    img: String
  },
  );

const Team = model('Team', schema);

module.exports = Team;