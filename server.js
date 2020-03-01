const express = require('express');
const app = express();
const connectDB = require('./config/db.js');

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/ticket', require('./routes/ticket'));

const PORT = process.env.PORT || 5000;

module.exports = app.listen(PORT, () =>
  console.log(`server listening on port ${PORT}`)
);
