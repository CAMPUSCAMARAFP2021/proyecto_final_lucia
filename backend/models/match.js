const {model, Schema} = require('mongoose');

const schema = new Schema({ 
    duration: Number,
    score: {type :Number, default: 00 },
    Date: Date,
    player: [
      {type: Schema.Types.ObjectId, ref:'Match'}
  ],
  },
  );

const Match = model('Match', schema);

module.exports = Match;