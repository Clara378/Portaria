require("dotenv").config(); // Tenta ler na raiz
// Se o arquivo estiver uma pasta acima, o dotenv.config() automático pode falhar.
// Por precaução, vamos garantir a leitura:
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mariadb = require("mariadb");

// LOG DE TESTE (Coloque fora da função para ver no terminal assim que o app ligar)
console.log("--- Verificação de Dados do Banco ---");
console.log("Host:", process.env.DBHOST);
console.log("User:", process.env.DBUSER);
console.log("Database:", process.env.DBNAME);
console.log("Senha existe?:", process.env.DBPASS ? "Sim" : "Não/Vazia");
console.log("-------------------------------------");

const pool = mariadb.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  connectionLimit: 5,
});

async function executarQuery(query, params = []) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(query, params);
    return rows;
  } catch (err) {
    console.error("Erro Crítico no Banco:", err.message);
    throw err;
  } finally {
    if (conn) conn.release();
  }
}

module.exports = { executarQuery };