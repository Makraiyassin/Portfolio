
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    recommender: String,
    who: String,
    recommendation: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('message', messageSchema);

