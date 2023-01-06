const { timeStamp } = require("console");
const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Image: {
        type: String,
    },
    Bio: {
        type: String,
    }
}, {timeStamps: true})

module.exports =  mongoose.model("ClassProfiles", profileSchema)