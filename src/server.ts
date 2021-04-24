import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database"
import { routes } from "./routes"

const app = express();

const http = createServer(app);//Criando Servidor - Protocolo http
const io = new Server(http);//Criando Servidor - Protocolo ws

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes)

http.listen(3000, () => console.log("Rodando... na porta 3000"));