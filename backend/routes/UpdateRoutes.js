const express = require('express');
const Router = express.Router();
const upload =require('../db/MulterConfig')
const path = require("path");
const fs = require('fs');
const { uploadPic,updatePic,deletePic } = require('../controllers/FileControllers');

// /upload 

Router.post("/",upload.single("profilePic"),uploadPic);
// Router.put("/:id")


module.exports = Router;