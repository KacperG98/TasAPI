const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use(function(req, res, next) {
  console.log('--------new middleware');
  next();
});

app.use('/api/ticket', require('./routes/ticket'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
