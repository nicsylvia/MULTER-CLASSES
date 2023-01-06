const express = require("express");

const multer = require("../Config/multer");

const {getAllProfile, newProfile, getOneProfile} = require("../Controller/profileController")

const router = express.Router();

router.route("/profile/new").post(multer, newProfile);
router.route("/new").get(getAllProfile)
router.route("/new/:id").get(getOneProfile)


module.exports = router