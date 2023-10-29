var express = require('express');
const UserModel = require('../models/UserModel');
const OnepieceModel = require('../models/OnepieceModel');
const ToyModel = require('../models/ToyModel');

var router = express.Router();


router.get('/', (req, res) => {
  res.render('login');
});
router.get('/admin', async (req, res) => {
  var toy = await ToyModel.find();
  var onepiece = await OnepieceModel.find();
  res.render('admin',  {toy: toy , onepiece: onepiece});
})

router.post('/', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  var users = await UserModel.find();

  var login = false;

  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      login = true;
      break;
    }
  }

  if (login)
    res.redirect('/admin');
  else
    res.redirect('/');
});

module.exports = router;