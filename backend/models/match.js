const {model, Schema} = require('mongoose');

const schema = new Schema({ 
    duration: Number,
    score: {type :Number, default: 00 },
    Date: Date,
    players: [
      {type: Schema.Types.ObjectId, ref:'Player'}
  ],
  teams: [
    {type: Schema.Types.ObjectId, ref:'Team'}
],
  },
  );

const Match = model('Match', schema);

module.exports = Match;