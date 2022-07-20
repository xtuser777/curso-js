const express = require('express');
const ContatoController = require('./src/controllers/ContatoController');
const router = express.Router();
const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');
const { loginRequired } = require('./src/middlewares/middleware');

router.get("/", new HomeController().index);

router.get(["/login", "/login/index"], LoginController.index);

router.post("/login/register", LoginController.registerUser);

router.post("/login/auth", LoginController.authenticateUser);

router.get("/login/logout", LoginController.logout);

router.get(["/contato", "/contato/index"], loginRequired, ContatoController.index);

router.post("/contato/register", loginRequired, ContatoController.registerContact);

router.get("/contato/:id", loginRequired, ContatoController.editContact);

module.exports = router;