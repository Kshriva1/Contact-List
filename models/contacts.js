const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required:true,
        unique:true
    },
    user: {
        type:String,
        required:true
    }
})

const Contacts = module.exports = mongoose.model('Contacts',ContactsSchema);