const mongoose = require('mongoose');

const SprintSchema = mongoose.Schema({
  name: {
    type: String
  },
  ticket: [
    {
      ticket: {
        type: mongose.Schema.Types.ObjectID,
        ref: 'Ticket'
      }
    }
  ],
  dateFrom: {
    type: Date,
    default: Date.Now
  },
  dateTo: {
    type: Date
  }
});

module.exports = SprintSchema = mongoose.model('Sprint', SprintSchema);
