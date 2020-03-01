const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ' '
  },
  fromTicket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  }
});

module.exports = mongoose.model('Task', TaskSchema);
