const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

//cria um objeto especifico para rotas => express.Router
const routes = express.Router();


//criar o cadastramento de alguma informação utilizando o método post 
//recebendo "req" e "res" e retornando um valor
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

// module.exports => exportando 
module.exports = routes; 





















//routes.get('/', (req, res)=> {
    
    //contém os pararametros enviados na url da rota (query)
    //name = parametro
    //req.query.name;

     // retornando resposta de texto
    //${} = template strings => armazena uma variavel 
   //return res.send(`Hello ${req.query.name}`);

    // retornando um objeto ao inves de somente um texto
    //return res.json({ message: `Hello ${req.query.name}` });
//});