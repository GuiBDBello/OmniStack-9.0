// Importa uma dependência externa
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
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

// Permite que qualquer tipo de aplicação acesse a API
app.use(cors());
// Define que o express deve utilizar o formato JSON
app.use(express.json());
// Forma utilizada pelo express para retornar arquivos estáticos (pdf, imagem)
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')));

app.use(routes);

// Roda a aplicação na porta definida
app.listen(3333);
