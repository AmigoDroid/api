import express from 'express';
import http from 'http';
import setupSocketIO from './socket.io/index.js';

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

setupSocketIO(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});