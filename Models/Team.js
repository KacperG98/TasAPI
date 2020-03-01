const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String
  },
  members: [
    {
      user: { type: mongoose.Schema.Types.ObjectID }
    }
  ]
});

module.exports = Team = mongoose.model('Team', TeamSchema);
