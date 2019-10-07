const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // Mostra todas as informações do 'spot' e do 'user'
        await booking.populate('spot').populate('user').execPopulate();

        const ownerSocket = req.connectedUsers[booking.spot.user];

        if (ownerSocket) {
            // Envia uma mensagem para o usuário conectado
            req.io.to(ownerSocket).emit('booking_request', booking);
        }

        return res.json(booking);
    }
}