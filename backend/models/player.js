const {model, Schema} = require('mongoose');

const schema = new Schema({

    name: String,
    number:   Number,
    matches: [
      {type: Schema.Types.ObjectId, ref:'March'}
  ],
  },

  );


const Player = model('Player', schema);

module.exports = Player;