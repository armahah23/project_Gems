const mongoose = require('mongoose');

const workdashboardSchema = new mongoose.Schema({
    work: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    addedparts: {
        type: String,
        required: true,
    },
    mechanic: {
        type: String,
        required: true,
    },
});

const Workdashboard = mongoose.model('Workdashboard', workdashboardSchema);

module.exports = Workdashboard;