const controller = require("../controllers/portaria.controller.js");
const db = require("../db/dbConnect.js");

class mostrarTabela {

  static async readAllPortaria() {
    console.log("portaria.model.js", "readAllPortaria()");
    const query = "select * from ";
   
    return db.executarQuery(query);
  }

  static async cadastraPessoa(pessoa , hora) {

   const query ="INSERT lista_pessoas SET id = ?, nome = ? WHERE cpf = ?";

    return db.executarQuery(query, [
        pessoa.nome, 
        pessoa.cpf,  
        pessoa.id   
    ]);
}
}
module.exports = cadastraPessoa;