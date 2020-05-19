let express = require('express');
let routes = express.Router();

routes.get('/', (req,res) => { //criando rota para users

    res.statusCode = 200; //resposta de conexão efetivada
    res.setHeader('Content-Type', 'application/json');
    res.json({

        users:[{

            name: 'Hcode',
            email: 'contato@hcode.com.br',
            id: 1,

        }]

    });

});//fechando rota users

routes.get('/admin', (req,res) => { //criando rota para users/admin

    res.statusCode = 200; //resposta de conexão efetivada
    res.setHeader('Content-Type', 'application/json'); //para responder com um json
    res.json({

        users:[{}]

    });

}); //fechando rota admin

module.exports = routes;