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
    unique: true,
    required: true
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
  ticket: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Ticket'
    }
  ],
  premisions: [
    {
      type: Number,
      default: 5
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('User', UserSchema);
