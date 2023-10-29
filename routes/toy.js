var express = require('express');
var router = express.Router();

var ToyModel = require('../models/ToyModel');



// router.get('/', async (req,res)=>{
//     var toyes = await ToyModel.find();
//     res.render('toy/index',{toyes:toyes})
// });

router.get('/', async (req, res) => {
    var toy = await ToyModel.find();
     res.render('toy/index', {toy: toy});
});


router.get('/add',(req,res)=>{
    res.render('toy/add');
});

router.post('/add',async (req,res)=>{
    var toy= req.body;
    await ToyModel.create(toy);
    console.log('add toy succeed');
    res.redirect('/toy');

});

router.get('/delete/:id', async (req,res)=>{
    var id = req.params.id;
    await ToyModel.findByIdAndDelete(id);
    console.log('delete toy succeed');
    res.redirect('/toy');
});

router.get('/detail/:id', async (req,res)=>{
    var id = req.params.id;
    var toy = await ToyModel.findById(id);
    res.render('toy/detail', {toy:toy});
});

router.get('/edit/:id', async (req,res)=>{
    var id = req.params.id;
    var toy = await ToyModel.findById(id);
    res.render('toy/edit',{toy:toy});
});

router.post('/edit/:id', async (req,res)=>{
    var id = req.params.id;
    var toy = req.body;
    await ToyModel.findByIdAndUpdate(id,toy);
    console.log('Update toy succeed');
    res.redirect('/toy'); 
});
router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    //relative search
    var toy = await ToyModel.find({ name: new RegExp(keyword, "i") });
    res.render('toy/index', { toy: toy });
 })

module.exports =router;