const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type:String,
        required:true
    }
})

const Contact = module.exports = mongoose.model('Contact',ContactSchema);