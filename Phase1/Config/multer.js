const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Uploads");
    },

    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) =>{
   const ext = path.extname(file.originalname)
   if (![".jpg", ".png", ".jpeg"].includes(ext)) {
    return cb(new Error("Unsupported Format"))
   } 
   cb(null, true)
}

const imageUploader = multer({
    storage: storage,
    fileFilter: fileFilter
}).single("Image");

module.exports = imageUploader