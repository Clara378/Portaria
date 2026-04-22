// importações de bibliotecas e configurações básicas
const http = require("http");
const morgan = require("morgan");
const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();

const portariaRoutes = require("./routes/portaria.router.js");


app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", portariaRoutes);


const porta = 3000

app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
