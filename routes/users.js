let NeDB = require('nedb');
let db = new NeDB({

    filename: 'users.db',
    autoload: true,

})

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
    
        db.insert(req.body, (err, user) => { //para inserir os dados enviados via POST no db

            if (err) {

                console.log(`error: ${err}`);
                res.status(400).json({ //código para erro

                    error: err,

                });

            } else {

                res.status(200).json(user); //código para sucesso e retorna o json com os dados do usuário

            }

        });
    
    }); //fechando rota admin

}