const portariaModel = require("../models/portaria.model");

const portariaController = {

  mostrarTabela: async (req, res) => {
    try {
      const pessoas = await portariaModel.listarTodos();
    res.render("index", { title: "Sistema de Portaria", pessoas });
    } catch (error) {
      console.error("Erro ao mostrar tabela:", error);
      res.status(500).send("Erro interno do servidor.");
    }
  },

  inserirPessoa: async (req, res) => {
    try {
      await portariaModel.salvar(req.body);
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao inserir pessoa:", error);
      res.status(500).send("Erro ao cadastrar pessoa.");
    }
  },

  editarPeassoa: async (req, res) => {
    try {
      await portariaModel.atualizar(req.body);
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao editar pessoa:", error);
      res.status(500).send("Erro ao editar pessoa.");
    }
  },

};

module.exports = portariaController;