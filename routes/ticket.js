const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json([{ a: 'a' }, { a: 'b' }, { a: 'c' }]);
});

router.get('/:id', async (req, res) => {
  res.json('get ' + req.params.id);
});

router.post('/', async (req, res) => {
  res.json('post');
});

router.put('/:id', async (req, res) => {
  res.json('put ' + req.params.id);
});

router.delete('/:id', async (req, res) => {
  res.json('delete ' + req.params.id);
});

module.exports = router;
