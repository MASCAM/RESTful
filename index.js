const express = require('express'); //carregando o módulo http

let app = express(); //chamando o módulo express pro aplicativo
let routesIndex = require('./routes/index'); //carregando as rotas dos arquivos nas variáveis
let routesUsers = require('./routes/users');

app.use(routesIndex);
app.use('/users', routesUsers); //chamando as rotas index e users

app.listen(3000, '127.0.0.1', () => { //cria um listener na porta 3000 no ip indicado

    console.log('servidor rodando!');

});


