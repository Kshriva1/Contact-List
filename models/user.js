const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
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
        type:String,
        required:true
    }
   ]
})

const User = module.exports = mongoose.model('User',UserSchema)