const portariaModel = require("../models/portaria.model");

const mostrarTabela = (req, res) => {
 portariaModel.readAllTarefas().then((cadastrar) => {
    console.log(cadastrar);
    res.render("index", { title: "pessoas", dados: nomes });
  });
};





const inserirPessoa =(req,res) =>{
  console.log("conteudo", req.body);
 portariaModel.cadastrarTarefa(req.body).then((status) => {
    console.log(status.affectedRows);
    // res.end("vamos ver no que da ");
    return res.redirect("/");
  });
};

module.exports = {
mostrarTabela,
inserirPessoa,
};