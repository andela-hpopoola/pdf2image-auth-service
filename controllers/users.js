const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models').Users;

module.exports = {
  register(req, res) {
    return Users.create(req.body)
      .then(result => {
        const user = result.toJSON();
        delete user.password;
        res.json(user);
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  },

  getUser(req, res) {
    return Users.findById(req.params.id)
      .then(user => {
        if (user) res.json(user);
        else res.status(404).json({ msg: 'User not Found' });
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
  },

  login(req, res) {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users.findOne({ where: { email } })
        .then(user => {
          if (bcrypt.compareSync(password, user.password)) {
            const payload = { email: user.email };
            user.token = jwt.sign(payload, 'secret');
            res.header('x-auth', user.token).json({
              email: user.email,
              token: user.token
            });
          } else {
            res.status(401).json({ msg: 'Unauthorized' });
          }
        })
        .catch(error => res.status(401).json({ msg: error.message }));
    } else {
      res.status(401).json({ msg: 'User not found' });
    }
  },

  authenticate(req, res) {
    const token = req.header('x-auth');
    let decoded = {};
    try {
      decoded = jwt.verify(token, 'secret');
    } catch (e) {
      res.json({ msg: 'Invalid Token' });
    }
    return Users.findOne({ where: { email: decoded.email } })
      .then(user => {
        if (!user) {
          res.json({ msg: 'User not found in db' });
        }
        res.json({ valid_user: true });
      })
      .catch(() => res.send({ msg: 'No Token was found' }));
  },

  logout(req, res) {
    return res
      .header('x-auth', '')
      .json({ msg: 'You have successfully logged out' });
  }
};
