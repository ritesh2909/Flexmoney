const mongoose = require("mongoose");

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var date = new Date();

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,        
    },
    month: {
        type: String,
        required: true,
        default: months[date.getMonth()],
    },
    
        
    },
     {timestamps: true}
);

const User = mongoose.model("User",UserSchema);
module.exports = User;