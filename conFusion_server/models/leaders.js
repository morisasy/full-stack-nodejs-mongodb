
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leadersSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default:false      
    }
});



var Leaders = mongoose.model('leaders', leadersSchema);

module.exports = Leaders;