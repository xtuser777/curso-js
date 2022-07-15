const express = require('express');
const ContatoController = require('./src/controllers/ContatoController');
const router = express.Router();
const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');

router.get("/", new HomeController().index);

router.get(["/login", "/login/index"], LoginController.index);

router.post("/login/register", LoginController.registerUser);

router.post("/login/auth", LoginController.authenticateUser);

router.get("/login/logout", LoginController.logout);

router.get(["/contato", "/contato/index"], ContatoController.index);

module.exports = router;