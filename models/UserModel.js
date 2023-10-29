const mongoose = require('mongoose');
var UserSchema = mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

const UserModel = mongoose.model('nguoi dung',UserSchema,'user');
module.exports = UserModel;