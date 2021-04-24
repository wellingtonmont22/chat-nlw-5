import { http } from "./http";
import "./websocket/client";

http.listen(3000, () => console.log("Rodando... na porta 3000"));