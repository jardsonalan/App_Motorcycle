const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const models = require("./models/index");
const config = require("./config/config.json");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// let empresas = models.Empresas;

app.get("/Empresa", async (req, res) => {
  const url = config.urlApi + "Empresa";

  axios
    .get(url)
    .then((response) => {
      console.log("Resposta do backend:", response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Erro na requisição para o backend:", error);
    });
});

let port = process.env.PORT || 1011;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando!");
});
