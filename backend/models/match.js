const {model, Schema} = require('mongoose');

const schema = new Schema({ 
    // players: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Player'
    // },
    // matches:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Match'
    // },
    duration: Number,
    score: Number,
  },
  );

const Match = model('Match', schema);

module.exports = Match;