const mongoose = require('mongoose');

let ZoneSchema = new mongoose.Schema({
    name     : {type: String, default: ''},
    zipCodes : {type: Array, default : []}, // Array of numbers [Number]
    timestamp: {type: Date, default  : Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);