const { v4: uuidv4 } = require("uuid");

const login = (req, res) => {

  const { email, password } = req.body || {};

  if (
    email === "usuario@esoft.com" &&
    password === "Abc123"
  ) {
    return res.status(200).json({
      token: uuidv4()
    });
  }

  return res.status(401).json({
    erro: "Credenciais inválidas"
  });
};

module.exports = {
  login
};