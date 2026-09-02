const express = require("express");

const router = express.Router();

const {
  listarJogos,
  buscarJogo,
  criarJogo,
  atualizarJogo,
  deletarJogo
} = require("../controllers/jogos.controller");
const validarJogo = require("../middlewares/validarJogo");

router.get("/jogos", listarJogos);

router.get("/jogos/:id", buscarJogo);

router.post("/jogos", validarJogo, criarJogo);

router.put("/jogos/:id", validarJogo, atualizarJogo);

router.delete("/jogos/:id", deletarJogo);

module.exports = router;