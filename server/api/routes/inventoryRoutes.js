const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define routes for inventory management
router.post('/inventory/create', inventoryController.createInventoryItem);
router.get('/inventory', inventoryController.getAllInventoryParts);
router.put('/inventory/:id', inventoryController.updateInventoryItem); // Update route
router.delete('/inventory/:id', inventoryController.deleteInventoryItem); // Delete route

module.exports = router;