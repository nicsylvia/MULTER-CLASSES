const detailsModel = require("../Model/detailsModel");
let defaultImg = "https://www.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg" 

// get:
const generalGet = async (req, res) =>{
    try {
        const getAll = await detailsModel.find();
        res.status(200).json({
            message: "All Details successfully gotten",
            data: getAll
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured in getting all details",
            data: error.message
        })
    }
};

// Post:
const addDetails = async (req, res) =>{
    try {
        const {Name, Bio} = req.body;
        const postDetails = await detailsModel.create({
            Name, 
            Bio : Bio ? Bio : "We're full stack software engineers at CodeLab",
            Image: req.file ? req.file.path : defaultImg
        })
        res.status(201).json({
            message: "This details was successfully uploaded",
            data: postDetails
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured in adding new details",
            data: error
        })
    }
};

module.exports = {generalGet, addDetails}

