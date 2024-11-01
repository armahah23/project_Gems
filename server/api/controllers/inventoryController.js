const fs = require("fs");
const Inventory = require("../schemas/inventorySchema");
const multer = require("multer");
const path = require("path");

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../uploads/inventory");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/inventory/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

// Create a new inventory item
exports.createInventoryItem = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res
        .status(500)
        .json({ status: "FAILED", message: "File upload error" });
    } else if (err) {
      return res.status(400).json({ status: "FAILED", message: err.message });
    }

    const { partName, partCode, quantity, price, description } = req.body;

    // Validate required fields
    if (!partName || !partCode || !quantity || !price) {
      return res
        .status(400)
        .json({ status: "FAILED", message: "Missing required fields" });
    }

    const partImage = req.file
      ? `http://localhost:3000/uploads/inventory/${req.file.filename}`
      : "";

    try {
      const newInventoryItem = new Inventory({
        partName,
        partCode,
        partImage,
        quantity,
        price,
        description,
      });

      await newInventoryItem.save();
      res.status(201).json({
        status: "SUCCESS",
        message: "Inventory item created successfully",
        data: newInventoryItem,
      });
    } catch (error) {
      console.error("Error creating inventory item:", error);
      res.status(500).json({
        status: "FAILED",
        message: "An error occurred while creating the inventory item",
      });
    }
  });
};

// Update an inventory item by ID (supports partial updates)
exports.updateInventoryItem = async (req, res) => {
  const { itemId } = req.params;
  const updates = {
    ...(req.body.partName && { partName: req.body.partName }),
    ...(req.body.partCode && { partCode: req.body.partCode }),
    ...(req.body.quantity && { quantity: parseInt(req.body.quantity) }),
    ...(req.body.price && { price: parseFloat(req.body.price) }),
    ...(req.body.description && { description: req.body.description }),
  };

  try {
    const inventoryItem = await Inventory.findByIdAndUpdate(itemId, updates, {
      new: true,
    });

    if (!inventoryItem) {
      return res.status(404).json({
        status: "FAILED",
        message: "Inventory item not found",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: "Inventory item updated successfully",
      data: inventoryItem,
    });
  } catch (error) {
    console.error("Error updating inventory item:", error);
    res.status(500).json({
      status: "FAILED",
      message: "An error occurred while updating the inventory item",
    });
  }
};

// Other controller functions remain the same...
exports.getInventoryItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const inventoryItem = await Inventory.findById(itemId);
    if (!inventoryItem) {
      return res.status(404).json({ status: "FAILED", message: "Item not found" });
    }
    res.status(200).json({ status: "SUCCESS", data: inventoryItem });
  } catch (error) {
    console.error("Error fetching inventory item:", error);
    res.status(500).json({ status: "FAILED", message: "An error occurred while fetching the inventory item" });
  }
};

exports.getAllInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.status(200).json({ status: "SUCCESS", data: inventoryItems });
  } catch (error) {
    console.error("Error fetching inventory items:", error);
    res.status(500).json({ status: "FAILED", message: "An error occurred while fetching the inventory items" });
  }
};

exports.updateInventoryItem = async (req, res) => {
  const { itemId } = req.params;
  const { partName, partCode, quantity, price, description } = req.body;

  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      itemId,
      { partName, partCode, quantity, price, description },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ status: "FAILED", message: "Item not found" });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: "Inventory item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    console.error("Error updating inventory item:", error);
    res.status(500).json({ status: "FAILED", message: "An error occurred while updating the inventory item" });
  }
};

exports.deleteInventoryItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const deletedItem = await Inventory.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ status: "FAILED", message: "Item not found" });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: "Inventory item deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting inventory item:", error);
    res.status(500).json({ status: "FAILED", message: "An error occurred while deleting the inventory item" });
  }
};
