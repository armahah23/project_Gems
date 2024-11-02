const Inventory = require("../schemas/inventorySchema");
const multer = require("multer");
const upload = require("../../config/multerConfig").single('image');

// Create a new inventory item
exports.createInventoryItem = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ status: "FAILED", message: "File upload error" });
    } else if (err) {
      return res.status(400).json({ status: "FAILED", message: err.message });
    }

    const  { partName, partCode, quantity, price, description } = req.body;
    const partImage = req.file ? `/uploads/inventory/${req.file.filename}` : null;

    // Validate required fields
    if (!partName || !partCode || !quantity || !price) {
      return res.status(400).json({ status: "FAILED", message: "Missing required fields" });
    }

    try {
      const newInventoryItem = new Inventory({
        partName,
        partCode,
        partImage,
        quantity,
        price,
        description,
      });

      const savedItem = await newInventoryItem.save();
      res.status(201).json({
        status: "SUCCESS",
        message: "Inventory item created successfully",
        data: savedItem,
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

// Fetch all inventory parts
exports.getAllInventoryParts = async (req, res) => {
  try {
    const parts = await Inventory.find();
    res.status(200).json(parts);
  } catch (error) {
    console.error("Error fetching inventory parts:", error);
    res.status(500).json({ status: "FAILED", message: "An error occurred while fetching inventory parts" });
  }
};
