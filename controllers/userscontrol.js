const { users, generateNextId } = require("../data/users");

function listUsers(req, res) {
  res.status(200).json({
    success: true,
    total: users.length,
    data: users
  });
}

function createUser(req, res) {
  const { nome, email } = req.body;

  const newUser = {
    id: generateNextId(),
    nome,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "Usuário criado com sucesso.",
    data: newUser
  });
}

function getUserById(req, res) {
    const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            sucess: false,
            msg: `Usuário com id ${id} não foi encontrado`
        });
    }
    res.status(200).json({
        sucess: true,
        data: user
    });
}

function updateUser(req, res) {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: `Usuário com id ${id} não foi encontrado.`
    });
  }

  const { nome, email } = req.body;

  if (nome !== undefined) user.nome = nome;
  if (email !== undefined) user.email = email;

  res.status(200).json({
    success: true,
    message: "Usuário atualizado com sucesso.",
    data: user
  });
}

function deleteUser(req, res) {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Usuário com id ${id} não foi encontrado.`
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Usuário removido com sucesso."
  });
}



module.exports = {
  listUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};