import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database"
import { routes } from "./routes"

const app = express();

const http = createServer(app);//Criando Protocolo http
const io = new Server(http);//Criando Protocolo ws

app.use(express.json());

app.use(routes)

app.listen(3000, () => console.log("Rodando... na porta 3000"));