const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define routes for inventory management
router.post('/inventory/create', inventoryController.createInventoryItem);
router.get('/inventory/:itemId', inventoryController.getInventoryItem);
router.get('/inventory', inventoryController.getAllInventoryItems);
router.put('/inventory/:itemId', inventoryController.updateInventoryItem);
router.delete('/inventory/:itemId', inventoryController.deleteInventoryItem);

module.exports = router;