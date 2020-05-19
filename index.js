const express = require('express'); //carregando o módulo http

let app = express();
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

app.use(routesIndex);
app.use(routesUsers);

app.listen(3000, '127.0.0.1', () => { //cria um listener na porta 3000 no ip indicado

    console.log('servidor rodando!');

});


