
function validateUser(req, res, next) {
  const { nome, email } = req.body;

  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "O campo 'nome' é obrigatório e deve ser um texto válido."
    });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({
      success: false,
      error: "O campo 'email' é obrigatório e deve ser um e-mail válido."
    });
  }

  next();
}

module.exports = validateUser;