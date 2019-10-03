// Por padrão, os métodos de um controle são: index, show, store, update e destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        // Desestruturação: busca 'email' em 'req.body'
        const { email } = req.body;

        // Busca o usuário no banco
        let user = await User.findOne({ email });

        // Se o usuário não existe, cria-o
        if (!user) {
            /*
             * Cria um novo usuário. 'await' aguarda a instrução ser executada,
             * e só segue a execução quando finalizada
             */
            user = await User.create({ email });
        }

        return res.json(user);
    }
};