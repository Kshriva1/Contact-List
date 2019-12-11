const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
})

const Contact = module.exports = mongoose.model('Contact',ContactSchema);