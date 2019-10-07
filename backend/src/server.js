// Importa uma dependência externa
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

/*
 * Importa o arquivo que gerencia as rotas. É necessário utilizar o caminho 
 * relativo (./), se não a aplicação busca por uma dependência externa
 */
const routes = require('./routes');

// "Cria" a aplicação
const app = express();
// Extrai o servidor HTTP do Express
const server = http.Server(app);
// Passa a ouvir o protocolo WebSocket
const io = socketio(server);

// Conecta no MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-qkjut.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectedUsers = {};

// Verifica todos os usuários logados na aplicação
io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
    /*
    setTimeout(() => {
        // Envia uma mensagem
        socket.emit('Hello', 'World');
    }, 4000);

    // "Escuta" uma mensagem
    socket.on('Omni', data => {
        console.log(data);
    });
    */
});

// 'next': Chama a função e continua o fluxo da aplicação
app.use((req, res, next) => {
    // Habilita o acesso ao 'io para todas as rotas
    req.io = io;
    // Habilita o acesso aos usuários conectados para todas as rotas
    req.connectedUsers = connectedUsers;

    return next();
});

// Permite que qualquer tipo de aplicação acesse a API
app.use(cors());
// Define que o express deve utilizar o formato JSON
app.use(express.json());
// Forma utilizada pelo express para retornar arquivos estáticos (pdf, imagem)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

// Roda a aplicação na porta definida
server.listen(3333);
