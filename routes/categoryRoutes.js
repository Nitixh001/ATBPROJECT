const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload");
const categoryController = require("../controllers/categoryController");
//CRUD Routes
//add/upload image(create)
router.post("/create", upload.single("image"), categoryController.createCategory);
//single category
router.get("/:id",categoryController.singleCategory);
//update Category
router.put("/:id",upload.single("image"),categoryController.updateCategory);
//delete category
router.delete("/:id",categoryController.deleteCategory);
module.exports = router;