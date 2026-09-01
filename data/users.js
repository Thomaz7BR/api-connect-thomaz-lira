let users = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@email.com" },
  { id: 2, nome: "Bruno Costa", email: "bruno.costa@email.com" },
  { id: 3, nome: "Carla Souza", email: "carla.souza@email.com" }
];

let nextId = 4;

function generateNextId() {
  return nextId++;
}

module.exports = {
  users,
  generateNextId
};