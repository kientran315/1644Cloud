var mongoose = require('mongoose');
var ToySchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name cannot be empty']

        },
        price:{
            type:Number,
            min:1
        },
        description:String, 
        image:String
    }
);

var ToyModel = mongoose.model('do choi',ToySchema,'toy');
module.exports = ToyModel;