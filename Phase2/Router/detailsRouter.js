const express = require("express");

const multer = require("../Config/multer")

const {addDetails, generalGet} = require("../Controller/detailsController");

const router = express.Router();

router.route("/adddetails").post(multer, addDetails)
router.route("/getdetails").get(generalGet)

module.exports = router