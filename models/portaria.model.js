const controller = require("../controllers/portaria.controller.js");
const db = require("../db/dbConnect.js");

class mostrarTabela {

  static async readAllPortaria() {
    console.log("Model: Lendo todos os registros...");
    const query = "SELECT * FROM lista_pessoas";
   
    return db.executarQuery(query);
  }

  static async cadastraPessoa(pessoa) {
console.log("Model: Cadastrando", pessoa.nomePessoa);
const query = "INSERT INTO lista_pessoas ( nome, cpf) VALUES (?, ?)";


return db.executarQuery(query, [
        pessoa.nomePessoa, 
        pessoa.cpfPessoa
    ]);
  }

 
  static async editarPessoa(pessoa) {
    console.log("Model: Editando ID", pessoa.id);

    const query = "UPDATE lista_pessoas SET nome = ?, cpf = ? WHERE id = ?";

    return db.executarQuery(query, [
        pessoa.nomePessoa,
         pessoa.cpfPessoa,  
        pessoa.id   
    ]);
}
}
module.exports = mostrarTabela;