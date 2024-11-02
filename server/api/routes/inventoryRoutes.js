const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define routes for inventory management
router.post('/inventory/create', inventoryController.createInventoryItem);
router.get('/inventory', inventoryController.getAllInventoryParts);
// router.get('/getInventoryParts/:partsId', inventoryController.getAllInventoryPartsByPartsId);

module.exports = router;