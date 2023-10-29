var mongoose = require('mongoose')
var OnepieceSchema = mongoose.Schema(
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
        size: {
            type:Number,
            min: 10,
        },
        color:String,
        image:String
    }
)
var OnepieceModel = mongoose.model('do choi 2',OnepieceSchema,'onepiece')

module.exports  = OnepieceModel;