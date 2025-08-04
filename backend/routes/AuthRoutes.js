const express = require("express");
const Router = express.Router();
const { Signup, Login } = require("../controllers/UserAuth");

Router.post("/signup",Signup)
Router.post('/login',Login);

module.exports = Router;
