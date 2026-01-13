const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const upload = require('../middleware/upload');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', upload.array('images', 5), createProduct);
router.put('/:id', upload.array('images', 5), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
