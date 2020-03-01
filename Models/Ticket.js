const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
  task: [
    {
      task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }
    }
  ],
  status: {
    type: Number
  },
  sprint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sprint'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = Ticket = mongoose.model('Ticket', TicketSchema);
