const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    roles:{
        type:String,
        required:true
    }
})

const User = module.exports = mongoose.model('User',UserSchema)