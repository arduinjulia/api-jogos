const jogos = require("../data/jogos.data");

let idAtual = 1;

// GET /jogos
const listarJogos = (req, res) => {
  return res.status(200).json(jogos);
};

// GET /jogos/:id
const buscarJogo = (req, res) => {

  const id = Number(req.params.id);

  const jogo = jogos.find(j => j.id === id);

  if (!jogo) {
    return res.status(404).json({
      erro: "Jogo não encontrado"
    });
  }

  return res.status(200).json(jogo);
};

// POST /jogos
const criarJogo = (req, res) => {

  const {
    nome,
    tipo,
    nota,
    review
  } = req.body || {};

  // Validação obrigatória
  if (
    !nome ||
    !tipo ||
    nota === undefined ||
    !review
  ) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    });
  }

  // Validação nota
  if (typeof nota !== "number") {
    return res.status(400).json({
      erro: "Nota deve ser numérica"
    });
  }

  const novoJogo = {
    id: idAtual++,
    nome,
    tipo,
    nota,
    review
  };

  jogos.push(novoJogo);

  return res.status(201).json(novoJogo);
};

// PUT /jogos/:id
const atualizarJogo = (req, res) => {

  const id = Number(req.params.id);

  const {
    nome,
    tipo,
    nota,
    review
  } = req.body || {};

  // Validação obrigatória
  if (
    !nome ||
    !tipo ||
    nota === undefined ||
    !review
  ) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    });
  }

  // Validação nota
  if (typeof nota !== "number") {
    return res.status(400).json({
      erro: "Nota deve ser numérica"
    });
  }

  const index = jogos.findIndex(j => j.id === id);

  if (index === -1) {
    return res.status(404).json({
      erro: "Jogo não encontrado"
    });
  }

  jogos[index] = {
    id,
    nome,
    tipo,
    nota,
    review
  };

  return res.status(200).json(jogos[index]);
};

// DELETE /jogos/:id
const deletarJogo = (req, res) => {

  const id = Number(req.params.id);

  const index = jogos.findIndex(j => j.id === id);

  if (index === -1) {
    return res.status(404).json({
      erro: "Jogo não encontrado"
    });
  }

  jogos.splice(index, 1);

  return res.status(204).send();
};

module.exports = {
  listarJogos,
  buscarJogo,
  criarJogo,
  atualizarJogo,
  deletarJogo
};