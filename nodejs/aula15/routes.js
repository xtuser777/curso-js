const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/home-controller');
const testesController = require('./src/controllers/testes-controller');

router.get("/", homeController.indexGet);

router.get("/testes/:idUsuarios?/:parametro?", testesController.tests);

router.post("/", homeController.indexPost);

module.exports = router;