const express = require('express');
const Router= express.Router();
const { getAllMessages, sendMessages } = require('../controllers/MessageController');

Router.get('/messages/:id',getAllMessages);
Router.post('/messages',sendMessages);


module.exports = Router;