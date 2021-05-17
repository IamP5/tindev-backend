//objeto declarado por "{}"
//função declarada por 

// require usado para importar o express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

//função para criar uma porta de entrada (server) para receber 
//requisições e respostas
const server = express();

//conexão mongoDB
mongoose.connect('mongodb+srv://Tuba:100100tido@cluster0.op6bm.mongodb.net/Omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

// GET (buscar info) - POST (criar um registro) - PUT (editar) DELETE (deletar)
// Recebendo a requisição e a resposta na rota raiz ('/')
//server.get('/', (req, res)=> {
    
    //contém os pararametros enviados na url da rota (query)
    //name = parametro
    
    //req.query.name;
    // retornando resposta de texto
    
    //${} = template strings => armazena uma variavel
    //return res.send(`Hello ${req.query.name}`);

    // retornando um objeto ao inves de somente um texto
    //return res.json({ message: `Hello ${req.query.name}` });

//});

//indica a porta que o servidor vai ouvir
server.listen(3333);

// M - Model, V - View, C - Controller


