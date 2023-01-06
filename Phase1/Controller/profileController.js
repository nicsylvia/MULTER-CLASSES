const profileModel = require("../Model/profileModel");

const newProfile = async (req, res) =>{
    try {
        const {Name, Bio} = req.body;
        const newFile = await profileModel.create({
            Name, Bio, Image: req.file.path,
        });
        res.status(201).json({
            message: "Successfully uploaded file",
            data: newFile,
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
};

const getAllProfile = async (req, res) =>{
    try {
        const getAll = await profileModel.find();
        res.status(200).json({
            message: "Got all profiles successfully",
            data: getAll
        })
    } catch (error) {
        res.status(400).json({
            message: 'An error occured',
            data: error.message
        })
    }
};
const getOneProfile = async (req, res) =>{
    try {
        const getone = await profileModel.findById(req.params.id);
        res.status(200).json({
            message: "Got One profile successfully",
            data: getone
        })
    } catch (error) {
        res.status(400).json({
            message: 'An error occured',
            data: error.message
        })
    }
};

module.exports = {newProfile, getAllProfile, getOneProfile}