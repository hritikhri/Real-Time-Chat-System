const express= require('express');
const Router = express.Router();
const { GetProfile , FriendList ,searchUser} = require("../controllers/Profile");
const { loginauthentication } = require('../controllers/LoginAuthentication');


Router.get("/profile",GetProfile);
Router.get("/friendlist",FriendList);
Router.get("/loginauthentication",loginauthentication);
Router.get("/search",searchUser)

module.exports = Router;