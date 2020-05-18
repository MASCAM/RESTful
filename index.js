const http = require('http'); //carregando o módulo http

let server = http.createServer((req, res) => { //criando o servidor req = chamadas res = respostas

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);
    switch (req.url) {

        case '/':
            res.statusCode = 200; //resposta de conexão efetivada
            res.setHeader('Content-Type', 'text/html'); //para processar o texto abaixo como html
            res.end('<h1>Olá</h1>'); //resposta em html
            break;

        case '/users':
            res.statusCode = 200; //resposta de conexão efetivada
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({

                users:[{

                    name: 'Hcode',
                    email: 'contato@hcode.com.br',
                    id: 1,

                }]

            })); 
            break;

    }

});

server.listen(3000, '127.0.0.1', () => { //cria um listener na porta 3000 no ip indicado

    console.log('servidor rodando!');

})