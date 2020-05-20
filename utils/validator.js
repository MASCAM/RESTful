const { check, validationResult } = require('express-validator');

module.exports = {

    user:(app, req, res) => {

        check('name', 'O nome é obrigatório.').not().isEmpty(); //para impedir que esses dados estejam em branco
        check('email', 'O e-mail está inválido.').not().isEmpty().isEmail();
        const errors = validationResult(req);
        console.log(req.body);
        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    }

}