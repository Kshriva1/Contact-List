const mongoose = require('mongoose');

const CorrectionSchema = mongoose.Schema({
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

const Correction = module.exports = mongoose.model('Correction',CorrectionSchema);