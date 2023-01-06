const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "Uploads");
    },

    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    },
})

const imageUploads = multer({
    storage: storage,
}).single("Image");

module.exports = imageUploads