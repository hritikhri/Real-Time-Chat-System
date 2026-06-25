const express = require('express');
const Router = express.Router();
const upload =require('../db/MulterConfig')
const path = require("path");
const fs = require('fs');
const { uploadPic,updatePic,deletePic } = require('../controllers/FileControllers');
const { uploadFile } = require("./../middleware/uploadCloudinary")
// /upload 

// Router.post("/",upload.single("profilePic"),uploadPic);
Router.post("/", uploadFile, uploadPic);

// Router.put("/:id")


module.exports = Router;