const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category', 'name slug').sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category', 'name slug');
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        res.json(product);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Product not found' });
        res.status(500).send('Server Error');
    }
};

// Create a product
exports.createProduct = async (req, res) => {
    try {
        const { name, price, originalPrice, description, category, inStock } = req.body;

        let images = [];
        if (req.files && req.files.length > 0) {
            images = req.files.map(file => `/uploads/${file.filename}`);
        }

        const newProduct = new Product({
            name,
            price,
            originalPrice,
            description,
            category,
            images,
            inStock: inStock === 'true'
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const { name, price, originalPrice, description, category, inStock, existingImages } = req.body;
        let product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({ msg: 'Product not found' });

        product.name = name || product.name;
        product.price = price || product.price;
        if (originalPrice !== undefined) product.originalPrice = originalPrice;
        product.description = description || product.description;
        product.category = category || product.category;
        product.inStock = inStock === 'true';

        // Handle Images
        // Start with existing images (ensure it's an array)
        let finalImages = [];
        if (existingImages) {
            finalImages = Array.isArray(existingImages) ? existingImages : [existingImages];
        }

        // Add new uploaded images
        if (req.files && req.files.length > 0) {
            const newImages = req.files.map(file => `/uploads/${file.filename}`);
            finalImages = [...finalImages, ...newImages];
        }

        // Only update images if we have a definitive set (either existing kept or new added)
        // If both are empty/null, we might assume clearing images or just not updating? 
        // Let's assume if existingImages is sent (even empty), we respect it.
        // If undefined and no files, maybe we keep original? 
        // Better logic: The frontend should send the *complete* list of images it wants the product to have (minus new files).
        // So validation:
        product.images = finalImages.length > 0 ? finalImages : product.images; // Fallback to keeping old if nothing sent? No, user might want to delete all.
        // Correct logic: If the request is a multipart form, we should trust the combination of existing + new.
        // If the user deleted all images in frontend, existingImages would be empty/undefined.
        // Let's rely on: if 'existingImages' is present in body (even empty), we use it.
        // Logic change: Check if existingImages is defined in the body
        if (req.body.existingImages !== undefined) {
            product.images = finalImages;
        } else if (req.files && req.files.length > 0) {
            if (finalImages.length > 0) product.images = finalImages;
        }

        await product.save();
        res.json(product);
    } catch (err) {
        console.error('Update Product Error:', err);
        res.status(500).json({ msg: err.message, stack: err.stack });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        await product.deleteOne();
        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
