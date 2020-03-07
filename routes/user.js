const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

const User = require('../Models/User');

router.get('/:id', async (req, res) => {});

router.post('/', async (req, res) => {
  const { name, surname, email, password } = req.body;

  try {
    let user = User.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: 'User already exist' }] });
    }

    const user = new User({
      name,
      surname,
      email,
      password
    });

    const salt = bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('secret'),
      {
        expiresIn: 36000
      },
      (err, token) => {
        if (err) throw err;
        res.json(token);
      }
    );
  } catch (err) {
    console.log(err.message);
    res.send(500).json({ err: err });
  }
});

router.put('/:id', async (req, res) => {});

router.put('/addteam/:id', async (req, res) => {});

router.put('/addpermision/:id', async (req, res) => {});

router.delete('/:id', async (req, res) => {});

module.exports = router;
