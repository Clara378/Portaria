const controller = require("../controllers/portaria.controller.js");
const db = require("../db/dbConnect.js");

class mostrarTabela {

  static async readAllPortaria() {
    console.log("portaria.model.js", "readAllPortaria()");
    const query = "select * from lista_ ";
   
    return db.executarQuery(query);
  }

  static async cadastraPessoa(pessoa , hora) {

const query = "INSERT INTO lista_pessoas (id, nome, cpf) VALUES (?, ?, ?)";
query = "update tarefas set dat = ?, hora = ?, descricao = ? where id =?" 

    return db.executarQuery(query, [
        pessoa.nome, 
        pessoa.cpf,  
        pessoa.id   
    ]);
}
}
module.exports = mostrarTabela;