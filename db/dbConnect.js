require("dotenv").config(); 
const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mariadb = require("mariadb");
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