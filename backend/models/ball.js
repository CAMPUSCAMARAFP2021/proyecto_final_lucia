const {model, Schema} = require('mongoose');



const schema = new Schema({

    

    //sacado del modulo
    // players: {

    //   type: Schema.Types.ObjectId,

    //   ref: 'Player'

    // },

    // matches:{

    //     type: Schema.Types.ObjectId,

    //     ref: 'Match'

    // },

    kind:   String,

  },

  );


const Ball = model('Ball', schema);

module.exports = Ball;