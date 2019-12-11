const mongoose = require('mongoose');

const adminVerUserSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String
    } 
})

const adminVerUser = module.exports = mongoose.model('adminVerUser',adminVerUserSchema)