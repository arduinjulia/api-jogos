const jogos = require("../data/jogos.data");

let idAtual = jogos.length > 0 ? Math.max(...jogos.map(j => j.id)) + 1 : 1;

// GET /jogos
const listarJogos = (req, res) => {
  const { tipo, desenvolvedora, ano, plataforma } = req.query;

  let resultado = jogos;

  if (tipo) {
    resultado = resultado.filter(j => j.tipo.toLowerCase() === tipo.toLowerCase());
  }

  if (desenvolvedora) {
    resultado = resultado.filter(j => j.desenvolvedora.toLowerCase() === desenvolvedora.toLowerCase());
  }

  if (ano) {
    const anoNum = Number(ano);
    if (isNaN(anoNum)) {
      return res.status(400).json({ erro: "Parâmetro 'ano' deve ser numérico" });
    }
    resultado = resultado.filter(j => j.anoLancamento === anoNum);
  }

  if (plataforma) {
    resultado = resultado.filter(j =>
      j.plataformas.some(p => p.toLowerCase() === plataforma.toLowerCase())
    );
  }

  return res.status(200).json(resultado);
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
    review,
    anoLancamento,
    desenvolvedora,
    plataformas,
    preco
  } = req.body || {};

  const novoJogo = {
    id: idAtual++,
    nome,
    tipo,
    nota,
    review,
    anoLancamento,
    desenvolvedora,
    plataformas,
    preco
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
    review,
    anoLancamento,
    desenvolvedora,
    plataformas,
    preco
  } = req.body || {};

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
    review,
    anoLancamento,
    desenvolvedora,
    plataformas,
    preco
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