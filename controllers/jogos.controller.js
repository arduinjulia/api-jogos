const jogos = require("../data/jogos.data");

let idAtual = jogos.length > 0 ? Math.max(...jogos.map(j => j.id)) + 1 : 1;

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

// GET /jogos/tipo/:tipo
const buscarPorTipo = (req, res) => {
  const tipo = req.params.tipo;

  const jogosFiltrados = jogos.filter(j => j.tipo.toLowerCase() === tipo.toLowerCase());

  return res.status(200).json(jogosFiltrados);
};

// GET /jogos/desenvolvedora/:desenvolvedora
const buscarPorDesenvolvedora = (req, res) => {
  const desenvolvedora = req.params.desenvolvedora;

  const jogosFiltrados = jogos.filter(j => j.desenvolvedora.toLowerCase() === desenvolvedora.toLowerCase());

  return res.status(200).json(jogosFiltrados);
};

// GET /jogos/ano/:ano
const buscarPorAno = (req, res) => {
  const ano = Number(req.params.ano);

  if (isNaN(ano)) {
    return res.status(400).json({ erro: "Ano deve ser numérico" });
  }

  const jogosFiltrados = jogos.filter(j => j.anoLancamento === ano);

  return res.status(200).json(jogosFiltrados);
};

// GET /jogos/plataforma/:plataforma
const buscarPorPlataforma = (req, res) => {
  const plataforma = req.params.plataforma;

  const jogosFiltrados = jogos.filter(j =>
    j.plataformas.some(p => p.toLowerCase() === plataforma.toLowerCase())
  );

  return res.status(200).json(jogosFiltrados);
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

  // Validação obrigatória
  if (
    !nome ||
    !tipo ||
    nota === undefined ||
    !review ||
    anoLancamento === undefined ||
    !desenvolvedora ||
    !plataformas ||
    preco === undefined
  ) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    });
  }

  // Validação numérica
  if (typeof nota !== "number" || typeof anoLancamento !== "number" || typeof preco !== "number") {
    return res.status(400).json({
      erro: "Nota, Ano de Lançamento e Preço devem ser numéricos"
    });
  }

  // Validação de array
  if (!Array.isArray(plataformas)) {
    return res.status(400).json({
      erro: "Plataformas deve ser uma lista (array)"
    });
  }

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

  // Validação obrigatória
  if (
    !nome ||
    !tipo ||
    nota === undefined ||
    !review ||
    anoLancamento === undefined ||
    !desenvolvedora ||
    !plataformas ||
    preco === undefined
  ) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    });
  }

  // Validação numérica
  if (typeof nota !== "number" || typeof anoLancamento !== "number" || typeof preco !== "number") {
    return res.status(400).json({
      erro: "Nota, Ano de Lançamento e Preço devem ser numéricos"
    });
  }

  // Validação de array
  if (!Array.isArray(plataformas)) {
    return res.status(400).json({
      erro: "Plataformas deve ser uma lista (array)"
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
  buscarPorTipo,
  buscarPorDesenvolvedora,
  buscarPorAno,
  buscarPorPlataforma,
  criarJogo,
  atualizarJogo,
  deletarJogo
};