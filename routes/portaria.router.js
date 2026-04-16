const express = require("express");
const portariaController = require("../controllers/portaria.controller");
const router = express.Router();


router.get("/",portariaController.mostrarTabela);
module.exports = router;