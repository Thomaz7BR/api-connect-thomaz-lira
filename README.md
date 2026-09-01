# API Usuários

API REST desenvolvida como MVP para uma plataforma de gerenciamento de usuários, permitindo operações de criação, listagem, busca, atualização e remoção de registros.

## Objetivo

Fornecer ao time de front-end uma base funcional e confiável para consumir dados de usuários via requisições HTTP, seguindo os padrões REST e retornando respostas padronizadas em JSON.

## Tecnologias utilizadas

- Node.js
- Express
- Nodemon (ambiente de desenvolvimento)

## Como executar o projeto localmente

1. Clone o repositório:

git clone https://github.com/Thomaz7BR/Api-Usuarios.git

2. Acesse a pasta do projeto:

cd Api-Usuarios

3. Instale as dependências:

npm install

4. Inicie o servidor:

node server.js

5. A API estará disponível em `http://localhost:3000`

## Endpoints disponíveis

| Método | Endpoint   | Descrição                          |
| ------ | ---------- | ---------------------------------- |
| GET    | /users     | Lista todos os usuários            |
| GET    | /users/:id | Busca um usuário específico por ID |
| POST   | /users     | Cadastra um novo usuário           |
| PUT    | /users/:id | Atualiza um usuário existente      |
| DELETE | /users/:id | Remove um usuário                  |

### Exemplo de requisição - Criar usuário (POST /users)

Corpo da requisição:

```json
{
  "nome": "Thomaz Teste",
  "email": "thomaz.teste@email.com"
}
```

Resposta (201 Created):

```json
{
  "success": true,
  "message": "Usuário criado com sucesso.",
  "data": {
    "id": 4,
    "nome": "Thomaz Teste",
    "email": "thomaz.teste@email.com"
  }
}
```

### Exemplo de requisição - Buscar usuário inexistente (GET /users/999)

Resposta (404 Not Found):

```json
{
  "success": false,
  "message": "Usuário com id 999 não foi encontrado."
}
```

## Estrutura do projeto

Api-Usuarios/
├── server.js
├── controllers/
│ └── userscontrol.js
├── routes/
│ └── usersroutes.js
├── middlewares/
│ └── validateUser.js
└── data/
└── users.js
