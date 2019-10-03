// Importa o mongoose
const mongoose = require('mongoose');

// Cria a estrutura do usuário
const UserSchema = new mongoose.Schema({
    email: String,
});

// Exporta o model
module.exports = mongoose.model('User', UserSchema);