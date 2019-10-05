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
}, {
    toJSON: {
        virtuals: true,
    },
});

// Cria um novo campo que não existe no banco, é computado pelo JavaScript
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);