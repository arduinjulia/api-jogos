const express = require("express");

const router = express.Router();

const {
  listarJogos,
  buscarJogo,
  criarJogo,
  atualizarJogo,
  deletarJogo
} = require("../controllers/jogos.controller");

router.get("/jogos", listarJogos);

router.get("/jogos/:id", buscarJogo);

router.post("/jogos", criarJogo);

router.put("/jogos/:id", atualizarJogo);

router.delete("/jogos/:id", deletarJogo);

module.exports = router;