import { WebSocketServer } from 'ws';  // Importa o WebSocketServer corretamente
import {v4 as uuidv4} from "uuid";
import startChat from "./chat/index.js";
import { generateId, gerarIdUnico } from '../util/gerates.js';

function setupSocketIO(server) {
  // Instanciando o WebSocketServer corretamente
  const wss = new WebSocketServer({ server });

  // Definindo o comportamento do servidor WebSocket
  wss.on("connection", (ws) => {
    console.log("WebSocket connected:");
    const clientId = uuidv4();
    console.log(`Client connected: ${clientId}`);
    ws.clientId = clientId;

    // Função para iniciar o chat (passa o WebSocket para ela)
    startChat(ws);

   
    ws.on("close", () => {
      console.log(`Client disconnected: ${clientId}`);
    });
  });
}

export default setupSocketIO;
