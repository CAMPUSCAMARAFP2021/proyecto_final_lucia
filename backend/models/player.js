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

const Player = model('Player', schema);

module.exports = Player;