const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        // Tipo ID de Objeto (ID do usuário)
        type: mongoose.Schema.Types.ObjectId,
        // Referencia o model 'User'
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);