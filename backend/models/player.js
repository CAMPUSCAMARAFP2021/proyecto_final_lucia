const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
    // players: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Player'
    // },
    // matches:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Match'
    // },
    slogan:   String,
    team: [
      {type: Schema.Types.ObjectId, ref:'Player'}
  ],
    anthem: String,
    img: String
  },
  );

const Player = model('Player', schema);

module.exports = Player;