const express = require('express');
const router = express.Router();
const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');

router.get("/", new HomeController().index);

router.get(["/login", "/login/index"], LoginController.index);

router.post("/login/register", LoginController.registerUser);

module.exports = router;