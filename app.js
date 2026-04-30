const express = require("express");
const morgan = require("morgan");
const portariaRoutes = require("./routes/portaria.router.js");

const app = express();

// Configurações e Middlewares
app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

// Essencial para AJAX (fetch) e formulários funcionarem
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/", portariaRoutes);

module.exports = app;
