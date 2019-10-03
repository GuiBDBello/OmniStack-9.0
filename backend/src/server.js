// Importa uma dependência externa
const express = require('express');
const mongoose = require('mongoose');
/*
 * Importa o arquivo que gerencia as rotas. É necessário utilizar o caminho 
 * relativo (./), se não a aplicação busca por uma dependência externa
 */
const routes = require('./routes');

// "Cria" a aplicação
const app = express();

// Conecta no MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-qkjut.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define que o express deve utilizar o formato JSON
app.use(express.json());

app.use(routes);

// Roda a aplicação na porta definida
app.listen(3333);
