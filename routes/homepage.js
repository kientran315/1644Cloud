var express = require('express');
const OnepieceModel = require('../models/OnepieceModel');
const ToyModel = require('../models/ToyModel');
var router = express.Router();

router.get('/', async (req,res)=>{
    var toy = await ToyModel.find();
    var onepiece = await OnepieceModel.find();
    res.render('homepage', {toy: toy, onepiece: onepiece});
  });

module.exports = router;