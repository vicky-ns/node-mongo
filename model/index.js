const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    tittle: {
        required: true,
        type: String,
    },
    year: {
        required: true,
        type: String,
    },
    actor: {
        required: true,
        type: String,
    }
})

module.exports = mongoose.model('data', dataSchema);