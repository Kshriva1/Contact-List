const mongoose = require('mongoose');


let UserSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    roles: [
    {
        type:String
    }
   ]
})

const User = module.exports = mongoose.model('User',UserSchema)