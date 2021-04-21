import express from "express";
import "./database"

const app = express();

app.get('/', (req, res) => {
    return res.json({message:"Olá NLW 05!"});
});

app.post('/', (req, res) => {
    return res.json({ message: "Usuário salvo!" })
});

app.listen(3000, () => console.log("Rodando... na porta 3000"));