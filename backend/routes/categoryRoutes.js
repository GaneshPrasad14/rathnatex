const express = require('express');
const router = express.Router();
const { getCategories, createCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');
const upload = require('../middleware/upload');

// Public routes
router.get('/', getCategories);

// Protected routes (add auth middleware later if needed, but for now assuming admin access via frontend protection)
router.post('/', upload.single('image'), createCategory);
router.put('/:id', upload.single('image'), updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
