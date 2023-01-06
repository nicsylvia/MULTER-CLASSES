const mongoose = require("mongoose");
let defaultImg = "https://www.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg" 

const detailSchema = mongoose.Schema({
   Name: {
    type: String,
    required: true
   },
   Bio: {
    type: String,
    // required: false
   },
   Image: {
    type: String,
    default: defaultImg
   },
}, {timeStamps: true});

module.exports = mongoose.model("ClassDetails", detailSchema)