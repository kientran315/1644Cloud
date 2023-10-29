var express = require('express');
var router = express.Router();
var OnepieceModel = require('../models/OnepieceModel');

router.get('/', async (req,res)=>{
    var onepiece = await OnepieceModel.find();
    res.render('onepiece/index',{onepiece: onepiece});
  });

  router.get('/detail/:id', async(req,res)=>{
    var id = req.params.id;
    var onepiece = await OnepieceModel.findById(id);
    res.render('onepiece/detail',{onepiece: onepiece});
});

router.get('/add',(req,res)=>{
    res.render('onepiece/add');
});
router.post('/add', async(req,res)=>{
    var onepiece = req.body;
    await OnepieceModel.create(onepiece);
    res.redirect('/onepiece');
})
router.get('/edit/:id', async(req,res)=>{
  var id = req.params.id;
  var onepiece = await OnepieceModel.findById(id);
  res.render('onepiece/edit',{onepiece: onepiece});
});
router.post('/edit/:id', async(req,res)=>{
    var id = req.params.id;
    var onepiece = req.body;
    await OnepieceModel.findByIdAndUpdate(id,onepiece);
    res.redirect('/onepiece');
})
router.get('/delete/:id', async(req,res)=>{
    var id = req.params.id;
    await OnepieceModel.findByIdAndDelete(id);
    res.redirect('/onepiece');
})

module.exports = router;