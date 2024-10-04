const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    itemcode: {
        type: String,
        required: true,
    },
    itemname: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    vehicle: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;