const express = require("express");
const portariaController = require("../controllers/portaria.controller");
const router = express.Router();


router.get("/",portariaController.mostrarTabela);
//mostrar listagem de pessoas + ap visitado, lista de 
 //registro de entrada/saida,historico de acesso


router.post("/cadastrar",portariaController.inserirPessoa);
//cadastrar de pessoa,cadastrar entrada/saida

router.post("/editar",portariaController.editarPeassoa);
module.exports = router;