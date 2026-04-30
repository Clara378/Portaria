const { executarQuery } = require("../db/dbConnect.js");

const Portaria = {
  listarTodos: async () => {
    console.log("Model: Buscando registros no banco...");
    const query = "SELECT * FROM lista_pessoas ORDER BY id DESC";
    return await executarQuery(query);
  },

  salvar: async (dadosPessoa) => {
    const { nomePessoa, cpfPessoa } = dadosPessoa;

    if (!nomePessoa || nomePessoa.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres.");
    }
    if (!cpfPessoa || cpfPessoa.length < 11) {
      throw new Error("CPF inválido ou incompleto.");
    }

    console.log("Model: Inserindo no banco ->", nomePessoa);
    const query = "INSERT INTO lista_pessoas (nome, cpf) VALUES (?, ?)";
    return await executarQuery(query, [nomePessoa, cpfPessoa]);
  },

  atualizar: async (dadosPessoa) => {
    const { id, nomePessoa, cpfPessoa } = dadosPessoa;
    console.log("Model: Atualizando registro ID:", id);
    const query = "UPDATE lista_pessoas SET nome = ?, cpf = ? WHERE id = ?";
    return await executarQuery(query, [nomePessoa, cpfPessoa, id]);
  }
};

module.exports = Portaria;