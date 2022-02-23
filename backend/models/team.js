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
    player: String,
    anthem: String,
    img: String
  },
  );

const Team = model('Team', schema);

module.exports = Team;