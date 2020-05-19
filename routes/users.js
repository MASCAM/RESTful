module.exports = (app) => { //função q já recebe o app pelo consign

    app.get('/users', (req,res) => { //criando rota para users

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
    
    app.post('/users', (req,res) => { //criando rota para users/admin
    
        res.json(req.body);
    
    }); //fechando rota admin

}