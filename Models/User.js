const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  teams: [
    {
      treamId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Team'
      },
      name: {
        type: String
      },
      role: {
        type: String
      }
    }
  ],
  premisions: [
    {
      type: Number
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
