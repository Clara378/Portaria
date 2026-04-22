const portariaModel = require("../models/portaria.model");

const mostrarTabela = (req, res) => {
 portariaModel.readAllPortaria().then((listaPessoas) => {
    console.log(listaPessoas);
    res.render("index", { dados: listaPessoas });
  });
};


const inserirPessoa =(req,res) =>{
  console.log("conteudo", req.body);
 portariaModel.cadastrarPessoas(req.body).then((status) => {
    console.log(status.affectedRows);
    return res.redirect("/");
  });
};

const editarPeassoa = (req,res) =>{
  console.log("dados para serem atualizados",req.body);
  portariaModel.editarPessoas(req.body).then((status) =>{
    console.log("dados atualizados",status.affectedRows);
    res.sendStatus(200);
  });
};

module.exports = {
mostrarTabela,
inserirPessoa,
editarPeassoa,
};