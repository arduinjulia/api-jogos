const express = require("express");

const jogosRoutes = require("./routes/jogos.routes");
const loginRoutes = require("./routes/login.routes");

const app = express();

// Middleware JSON
app.use(express.json());

// Rotas
app.use("/", loginRoutes);
app.use("/", jogosRoutes);

// Tratamento JSON inválido
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      erro: "JSON inválido"
    });
  }

  next();
});

// Rota não encontrada
app.use((req, res) => {
  return res.status(404).json({
    erro: "Rota não encontrada"
  });
});

// Tratamento global de erros
app.use((err, req, res, next) => {
  console.error(err);

  return res.status(500).json({
    erro: "Erro interno do servidor"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});