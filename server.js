const express = require("express")
const usersRoutes = require("./routes/usersroutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Servidor rodando com sucesso!"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});