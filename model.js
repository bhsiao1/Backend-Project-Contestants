const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    contestantName: {
        required: true,
        type: String
    },
    husbandName: {
        required: true,
        type: String
    },
    vocalRange: {
        required: true,
        type: Number
    },
    location: {
        required: true,
        type: Number
    }
}, { versionKey: false })


module.exports = mongoose.model('Data', dataSchema)

