const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de PAGAMENTOS funcionando");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Pagamentos rodando na porta 3000");
});