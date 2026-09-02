const validarJogo = (req, res, next) => {
  const { nome, tipo, nota, review, anoLancamento, desenvolvedora, plataformas, preco } = req.body || {};

  if (!nome?.trim() || !tipo?.trim() || !review?.trim() || !desenvolvedora?.trim()) {
    return res.status(400).json({ erro: "Campos de texto obrigatórios não podem ser vazios" });
  }

  if (typeof nota !== "number" || Number.isNaN(nota) || !Number.isFinite(nota) || nota < 0 || nota > 10) {
    return res.status(400).json({ erro: "Nota deve ser um número entre 0 e 10" });
  }

  if (typeof anoLancamento !== "number" || Number.isNaN(anoLancamento) || !Number.isInteger(anoLancamento) || anoLancamento < 1950) {
    return res.status(400).json({ erro: "Ano de lançamento inválido" });
  }

  if (typeof preco !== "number" || Number.isNaN(preco) || !Number.isFinite(preco) || preco < 0) {
    return res.status(400).json({ erro: "Preço deve ser um número positivo" });
  }

  if (!Array.isArray(plataformas) || plataformas.length === 0 || !plataformas.every(p => typeof p === "string" && p.trim() !== "")) {
    return res.status(400).json({ erro: "Plataformas deve ser um array contendo strings não vazias" });
  }

  next();
};

module.exports = validarJogo;