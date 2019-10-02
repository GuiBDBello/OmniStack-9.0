// Importa uma dependência externa
const express = require('express');

// "Cria" a aplicação
const app = express();

// Define que o express deve utilizar o formato JSON
app.use(express.json());

/*
 * Define uma rota e uma função com requisição (informações que o usuário está enviando)
 * e resposta (dados retornados pelo servidor ao cliente) de uma requisição GET
 */
app.get('/', (req, res) => {
    // Retorna um texto na resposta
    //return res.send('Hello World!');

    // Retorna uma estrutura de dados no formato JSON
    return res.json({ message: "Hello World!" });
});

// Como o navegador faz apenas requisições GET, utilizaremos o Insomnia para testar requisições POST
app.post('/users', (req, res) => {
    return res.json({ message: "Hello OmniStack" });
});

// Query Params (para filtros) são acessados pela variável `req.query`
app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

// Route Params (para edição, deleção) vão dentro da URL e são acessados pela variável `req.params`
app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

// Body (para criação) é acessado pela variável `req.body`
app.post('/users', (req, res) => {
    return res.json(req.body);
});

// Roda a aplicação na porta definida
app.listen(3333);
