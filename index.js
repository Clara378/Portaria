require("dotenv").config(); // PRIMEIRA LINHA
const app = require("./app");

// Uso da porta do .env ou padrão 3000
const porta = process.env.PORTA || 3000;

app.listen(porta, () => {
  console.log("--- Sistema de Portaria ---");
  console.log(`Servidor rodando em: http://localhost:${porta}`);
});
